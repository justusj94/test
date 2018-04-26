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
        sh '''#run new docker image in container and execute karma test
#and selenium acceptance test
docker run -d --name="test" test /bin/bash -c "npm test && node selenium-tests/google_search.js"

docker exec test /bin/bash -c "npm test && node selenium-tests/google_search.js"


#copy test results from container
docker cp test:/app/results $WORKSPACE

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