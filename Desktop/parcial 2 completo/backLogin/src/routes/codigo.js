// src/routes/codigo.js
const express = require('express');
const { getAllCodigos } = require('../controllers/codigoController'); // Asegúrate de que el import es correcto
const router = express.Router();

// Rutas
router.get('/', getAllCodigos); // Aquí estás usando el controlador

module.exports = router;
