# Étape 1: Utiliser une image de base officielle
FROM node:18-alpine

# Étape 2: Créer un répertoire de travail dans le container
WORKDIR /app

# Étape 3: Copier les fichiers nécessaires
COPY package.json package-lock.json ./

# Étape 4: Installer les dépendances
RUN npm install

# Étape 5: Copier le reste du code
COPY . .

# Étape 6: Construire le projet si c'est un projet React (frontend)
RUN npm run build

# Étape 7: Exposer le port (si serveur backend ou app React)
EXPOSE 3000

# Étape 8: Commande par défaut pour lancer l'application
CMD ["npm", "start"]
