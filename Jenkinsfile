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
        sh '''git remote set-url origin git@github.com:justusj94/test.git
git merge master
#git add .

#merge with master
#git merge master

#when no conflicts merge this branch with master
#git checkout master
#git merge --no-ff test


cd /var/lib/jenkins
rm -r ~/deploy
mkdir ~/deploy
git clone https://github.com/justusj94/test.git ~/deploy/
ssh -i ~/.ssh/stage-boomerweb-ssh root@stage.boomerweb.nl \'rm -r /var/www/stage.boomerweb.nl/justus/pipeline-test/*\'
scp -i ~/.ssh/stage-boomerweb-ssh ~/deploy/* root@stage.boomerweb.nl:/var/www/stage.boomerweb.nl/justus/pipeline-test
'''
      }
    }
  }
}