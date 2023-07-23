// Import des dépendences
const express = require('express');

// Import des controllers
const mainController = require('./controllers/mainController');

// Mise en place du router
const router = express.Router();

// Route
router.get('/', mainController.home);

// Export
module.exports = router;