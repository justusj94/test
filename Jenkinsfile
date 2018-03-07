pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo Build'
        sh 'ls -lh'
      }
    }
    stage('Backend') {
      parallel {
        stage('Unit') {
          steps {
            sh 'echo Unit'
          }
        }
        stage('Performance') {
          steps {
            sh 'echo Performance'
          }
        }
      }
    }
    stage('Frontend') {
      steps {
        sh 'echo Frontend'
      }
    }
    stage('Static Analysis') {
      steps {
        sh 'echo Static'
      }
    }
    stage('Deploy') {
      steps {
        sh '''rm -r ~/test
mkdir ~/test
git clone https://github.com/justusj94/test.git ~/test/
ssh root@stage.boomerweb.nl \'rm -r /var/www/stage.boomerweb.nl/justus/pipeline-test/*\'
scp ~/test/* root@stage.boomerweb.nl:/var/www/stage.boomerweb.nl/justus/pipeline-test
'''
      }
    }
  }
}