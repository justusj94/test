pipeline {
  agent {
    dockerfile true
  }
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
        sh '''cd /home/justus/

node_modules/karma/bin/karma start '''
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

#move to master branch and pull from test
git checkout master
git pull origin test

#merge test with master branch
git merge --no-ff test 
git push -u origin master

cd /var/lib/jenkins
#remove and create deploy folder
rm -r -f ~/deploy
mkdir -p ~/deploy

#clone repository and deploy to remote server
git clone https://github.com/justusj94/test.git ~/deploy
ssh -i ~/.ssh/stage-boomerweb-ssh root@stage.boomerweb.nl \'rm -r -f /var/www/stage.boomerweb.nl/justus/pipeline-test/*\'
scp -r -i ~/.ssh/stage-boomerweb-ssh ~/deploy/* root@stage.boomerweb.nl:/var/www/stage.boomerweb.nl/justus/pipeline-test
'''
      }
    }
  }
}
