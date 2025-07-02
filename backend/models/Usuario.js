const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  presentacion: String,
  genero: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);