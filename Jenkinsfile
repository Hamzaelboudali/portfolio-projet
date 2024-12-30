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
                echo 'Installation des dépendances avec npm...'
                sh 'npm install'
            }
        }
        stage('Lancer les tests') {
            steps {
                echo 'Exécution des tests...'
                sh 'npm test -- --watchAll=false'
            }
        }
        stage('Construire l\'application') {
            steps {
                echo 'Création du build...'
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Pipeline terminé.'
        }
        success {
            echo 'Le pipeline a réussi avec succès.'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}
