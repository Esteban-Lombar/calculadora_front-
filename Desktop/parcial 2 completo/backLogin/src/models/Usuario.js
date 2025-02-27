const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaDeNacimiento: { type: Date, required: true },
  cedula: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  celular: { type: String, required: true },
  ciudad: { type: String, required: true },
  contrasena: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

UsuarioSchema.pre('save', async function (next) {
  if (!this.isModified('contrasena')) return next();
  const salt = await bcrypt.genSalt(10);
  this.contrasena = await bcrypt.hash(this.contrasena, salt);
  next();
});

UsuarioSchema.methods.matchPassword = async function (contrasena) {
  return await bcrypt.compare(contrasena, this.contrasena);
};

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
