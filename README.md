# Initiation à Node.js (Pas besoin si package.json déjà présent)
- Pour créer le package.json : `npm init -y`
- Ajouter le package express : `npm install express --save`
- Ajouter pour le watch : `npm install nodemon --save-dev`


# Marche à suivre pour démarrer
- Démarrer le container docker : `docker-compose up -d`
- Se connecter au container : `docker exec -it node bash`
- initialiser le projet : `npm install`

# Démarrer le serveur
- Démarrer le serveur avec watch : `npm run dev`
- Démarrer le serveur sans watch : `npm run start`

# Accès au serveur
- Accéder au serveur : `http://localhost:3000/`

# Stopper le container
- stopper le container : `docker-compose down`