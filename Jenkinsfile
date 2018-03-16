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

#move to test branch
#git checkout test
#git pull origin test

#when no conflicts merge this branch with master
#git checkout master
#git pull origin master

#merge with master
#git merge --no-ff master
#git merge --no-ff test

git checkout master
git pull origin test 
git merge origin test
git push origin master

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