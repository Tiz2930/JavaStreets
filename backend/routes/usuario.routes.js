const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Guardar cambios del perfil
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el perfil' });
  }
});

// (Para pruebas) Obtener usuario
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuario' });
  }
});

module.exports = router;