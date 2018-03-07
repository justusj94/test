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
        sh 'scp / root@stage.boomerweb.nl:/var/www/stage.boomerweb.nl/justus/pipeline-test'
      }
    }
  }
}