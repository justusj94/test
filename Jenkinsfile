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
        sh '''sudo rm -r /var/lib/jenkins/deploy
sudo mkdir /var/lib/jenkins/deploy
sudo git clone -b deployment https://github.com/justusj94/test.git /var/lib/jenkins/deploy
sudo ssh root@stage.boomerweb.nl \'rm -r /var/www/stage.boomerweb.nl/justus/pipeline-test/*\'
sudo scp /var/lib/jenkins/deploy* root@stage.boomerweb.nl:/var/www/stage.boomerweb.nl/justus/pipeline-test
'''
      }
    }
  }
}