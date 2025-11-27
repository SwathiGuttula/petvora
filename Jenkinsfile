pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React app') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker image') {
            steps {
                bat 'docker build -t petadoption-app .'
            }
        }

        stage('Run Docker container') {
            steps {
                bat '''
                docker stop petadoption-container 2>nul || echo "No existing container"
                docker rm petadoption-container 2>nul || echo "No existing container"
                docker run -d --name petadoption-container -p 3000:80 petadoption-app
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployed successfully! Open http://localhost:3000'
        }
        failure {
            echo '❌ Build failed. Check console output.'
        }
    }
}
