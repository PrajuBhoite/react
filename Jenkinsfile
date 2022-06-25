pipeline {
    agent any
    environment {
        npm_config_cache = "npm-cache"
    }
    stages {
        stage("Check versions") {
            steps {
                bat '''
                    node --version
                    npm --version
                '''
            }
        }
        stage("Build") {
            steps {
                bat "npm install"
            }
        }
        stage("Release") {
            steps {
                bat "npm run build"
            }
        }
    }
}
