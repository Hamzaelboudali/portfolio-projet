pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'portfolio-projet'
        DOCKER_TAG = 'latest'
        DOCKER_HUB_USERNAME = '<dockerhub-username>'
        DOCKER_HUB_PASSWORD = credentials('docker-hub-password')
    }
    stages {
        stage('Installer Dart') {
            steps {
                script {
                    echo 'Installation de Dart...'
                    sh 'curl -sSL https://dl.google.com/dartium/linux/stable/dart-sdk-linux-x64-release.zip -o dart.zip'
                    sh 'unzip dart.zip -d /usr/local'
                    sh 'export PATH="$PATH:/usr/local/dart-sdk/bin"'
                }
            }
        }
        stage('Cloner le code') {
            steps {
                echo 'Clonage du dépôt GitHub...'
                checkout scm
            }
        }
        stage('Installer les dépendances Dart') {
            steps {
                dir('portfolio') {
                    echo 'Installation des dépendances avec Dart...'
                    sh 'pub get'
                }
            }
        }
        stage('Lancer les tests') {
            steps {
                dir('portfolio') {
                    echo 'Exécution des tests avec Dart...'
                    sh 'pub run test'
                }
            }
        }
        stage('Construire l\'application') {
            steps {
                dir('portfolio') {
                    echo 'Construction de l\'application avec Dart...'
                    sh 'dart compile exe bin/server.dart -o build/server'
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
