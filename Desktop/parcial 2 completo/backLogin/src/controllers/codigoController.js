// src/controllers/codigoController.js
const Codigo = require('../models/Codigo'); // Asegúrate de que la ruta sea correcta

// Controlador para obtener todos los códigos
exports.getAllCodigos = async (req, res) => {
    try {
        const codigos = await Codigo.find(); // Ajusta según tu modelo
        res.json(codigos);
    } catch (error) {
        console.error('Error al obtener códigos:', error);
        res.status(500).json({ message: 'Error al obtener códigos' });
    }
};
