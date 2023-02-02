const express = require('express');
const userSchema = require('../models/user.js');

const router = express.Router();

// Crear usuarios || CREATE
router.post('/datosPersonales', (req, res) => {
  const user = userSchema(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message : error }))
});

// Obtener todos los usuarios
router.get('/datosPersonales', (req, res) => {
  userSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message : error }));
});

// Obtener usuario || LEER-READ
router.get('/datosPersonales/:id', (req, res) => {
  const { id } = req.params;
  userSchema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message : error }));
});

// Actualizar usuario || LEER-READ
router.put('/datosPersonales/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, edad } = req.body;
  userSchema
  .updateOne({ _id: id },{ $set: {nombre, apellido, edad}})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message : error }));
});

// BORRAR usuario || DELETE
router.delete('/datosPersonales/:id', (req, res) => {
  const { id } = req.params;
  userSchema
  .remove({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message : error }));
});

//  CRUD 
//  CREATE-CREAR 
//  READ-LEER 
//  UPDATE-ACTUALIZAR 
//  DELETE-ELIMINAR
module.exports = router;