pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo Build'
        sh 'ls -lh'
      }
    }
    stage('Unit') {
      steps {
        sh ''' git fetch origin testing
ls -lh'''
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
        sh '''rm -r /var/lib/jenkins/deploy
mkdir /var/lib/jenkins/deploy
git clone -b deployment https://github.com/justusj94/test.git /var/lib/jenkins/deploy
ssh root@stage.boomerweb.nl \'rm -r /var/www/stage.boomerweb.nl/justus/pipeline-test/*\'
scp /var/lib/jenkins/deploy* root@stage.boomerweb.nl:/var/www/stage.boomerweb.nl/justus/pipeline-test
'''
      }
    }
  }
}