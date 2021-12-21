const express = require('express');
// Pasamos a importar el modelo de usuarios
const { notaModel } = require('../models/notaModels');

// Hacemos uso del constructor de express llamado Router
// para la creación de un enrutador
const notarouter = express.Router();


const { vacunaSaveGuard } = require('../guards/vacunaSaveGuard');



/**
 * Create nota
 */
notarouter.post('/notas', vacunaSaveGuard, (req, res) => {
  const nota = notaModel(req.body);
  nota.save(function (error) {
    if (error) {
      return res
        .status(500)
        .send({ estado: 'error', msg: 'ERROR: Vacuna NO guardada' });
    }
    return res.status(200).send({ estado: 'ok', msg: 'nota Guardada' });
  });
});



/**
 * Get all notas
 */
notarouter.get('/notas', async (req, res) => {
  notaModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Get a nota
 */
notarouter.get('/notas/:cod', (req, res) => {
  const { codl } = req.params;
  notaModel
    .findOne({ cod })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Update a nota
 */
notarouter.put('/notas/:cod', (req, res) => {
  const { cod } = req.params;
  const {  email, fech, not } = req.body;
  notaModel
    .updateOne({ cod }, { $set: { email, fech, not } })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Delete a nota
 */
notarouter.delete('/notas/:cod', (req, res) => {
  const { cod } = req.params;
  notaModel
    .remove({ cod })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});



module.exports = notarouter;
