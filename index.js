// Import des variables d'environnement
require('dotenv').config();

// Import des dépendences
const express = require('express');

// Import des dépendences internes
const router = require('./app/router');

// Creation d'un APP Express
const app = express();

// Setup du view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Setup du dossier public
app.use(express.static('public'));

// Plug du router
app.use(router);

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})