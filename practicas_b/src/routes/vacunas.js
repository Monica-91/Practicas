const express = require('express');
// Pasamos a importar el modelo de usuarios
const { vacunaModel } = require('../models/vacunaModels');

// Hacemos uso del constructor de express llamado Router
// para la creación de un enrutador
const vacunarouter = express.Router();

const { vacunaSaveGuard } = require('../guards/vacunaSaveGuard');

/**
 * Create vacuna
 */
vacunarouter.post('/vacunas', vacunaSaveGuard, (req, res) => {
  const vacuna = vacunaModel(req.body);
  vacuna.save(function (error) {
    if (error) {
      return res
        .status(500)
        .send({ estado: 'error', msg: 'ERROR: Vacuna NO guardada' });
    }
    return res.status(200).send({ estado: 'ok', msg: 'vacuna Guardada' });
  });
});

/**
 * Get all vacunas
 */
vacunarouter.get('/vacunas', async (req, res) => {
  vacunaModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Get a vacuna
 */
vacunarouter.get('/vacunas/:doc', (req, res) => {
  const { doc } = req.params;
  vacunaModel
    .findOne({ doc })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Update a vacuna
 */
vacunarouter.put('/vacunas/:cod', (req, res) => {
  const { cod } = req.params;
  const { nom, cantmin, cant } = req.body;
  vacunaModel
    .updateOne({ cod }, { $set: { nom, cantmin, cant } })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Delete a vacuna
 */
vacunarouter.delete('/vacunas/:cod', (req, res) => {
  const { cod } = req.params;
  vacunaModel
    .remove({ cod })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

module.exports = vacunarouter;
