const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques (HTML, CSS)
app.use(express.static(__dirname));

// Route pour la page d'accueil
app.get('/', (req, res) => {

  res.sendFile(__dirname + '/index1.html');
});


// Écoutez le serveur sur le port 3000
app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});
