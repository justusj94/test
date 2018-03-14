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
            sh 'phpunit --bootstrap Email.php tests/EmailTest'
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
        sh '''git checkout test
git merge test
git commit -am "Merged test branch to master"
git push origin master

cd /var/lib/jenkins
rm -r ~/deploy
mkdir ~/deploy
git clone https://github.com/justusj94/test.git ~/deploy/
ssh root@stage.boomerweb.nl \'rm -r /var/www/stage.boomerweb.nl/justus/pipeline-test/*\'
scp ~/deploy/* root@stage.boomerweb.nl:/var/www/stage.boomerweb.nl/justus/pipeline-test
'''
      }
    }
  }
}