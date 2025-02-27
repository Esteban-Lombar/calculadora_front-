// models/Codigo.js
const mongoose = require('mongoose');

const CodigoSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  fecha: { type: Date, default: Date.now }
});

const Codigo = mongoose.model('Codigo', CodigoSchema);

module.exports = Codigo;
