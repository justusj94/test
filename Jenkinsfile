pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      steps {
        sh '''echo $WORKSPACE
docker build -t test .'''
      }
    }
    stage('Karma Unit Test') {
      steps {
        sh '''#run new docker image in container and execute test
docker run --name="test" test /bin/bash -c "npm test"

#copy test results from container
docker cp test:/app/results $WORKSPACE'''
      }
    }
    stage('Selenium Acceptence Test') {
      steps {
        sh '''#selenium test
docker exec -i -t test /bin/bash -c "node selenium-tests/google_search.js"

#remove container
docker rm test'''
      }
    }
  }
  post {
    always {
      junit 'results/**/*.xml'

    }

  }
}