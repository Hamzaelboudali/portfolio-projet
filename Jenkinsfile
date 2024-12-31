pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'portfolio-projet'
        DOCKER_TAG = 'latest'
        DOCKER_HUB_USERNAME = '<dockerhub-username>'
        DOCKER_HUB_PASSWORD = credentials('docker-hub-password') // Assure-toi d'avoir un credential avec ton mot de passe Docker Hub dans Jenkins
    }
    stages {
        stage('Cloner le code') {
            steps {
                echo 'Clonage du dépôt GitHub...'
                checkout scm
            }
        }
        stage('Installer les dépendances') {
            steps {
                dir('portfolio') {
                    echo 'Installation des dépendances avec npm...'
                    sh 'npm install'
                }
            }
        }
        stage('Lancer les tests') {
            steps {
                dir('portfolio') {
                    echo 'Exécution des tests...'
                    sh 'npm test -- --watchAll=false'
                }
            }
        }
        stage('Construire l\'application') {
            steps {
                dir('portfolio') {
                    echo 'Construction de l\'application...'
                    sh 'npm run build'
                }
            }
        }
        stage('Construire l\'image Docker') {
            steps {
                script {
                    echo 'Création de l\'image Docker...'
                    sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }
        stage('Se connecter à Docker Hub') {
            steps {
                script {
                    echo 'Connexion à Docker Hub...'
                    sh "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD"
                }
            }
        }
        stage('Pousser l\'image sur Docker Hub') {
            steps {
                script {
                    echo 'Poussée de l\'image Docker sur Docker Hub...'
                    sh "docker tag $DOCKER_IMAGE:$DOCKER_TAG $DOCKER_HUB_USERNAME/$DOCKER_IMAGE:$DOCKER_TAG"
                    sh "docker push $DOCKER_HUB_USERNAME/$DOCKER_IMAGE:$DOCKER_TAG"
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline terminé avec succès.'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}
