pipeline {
    agent any
    stages {
        stage('Cloner le code') {
            steps {
                echo 'Clonage du dépôt GitHub...'
                checkout scm
            }
        }
        stage('Installer les dépendances') {
            steps {
                dir('portfolio') { // Navigue dans le dossier 'portfolio'
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
