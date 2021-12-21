const express = require('express');
// Pasamos a importar el modelo de Ninños
const { userModelNino } = require('../models/userModelNino');

// Hacemos uso del constructor de express llamado Router
// para la creación de un enrutador
const router = express.Router();

const UserNino = require('../models/userModels');

/**
 * Create User/Niño
 */

router.post('/usersN', (req, res) => {
  const users = userModelNino(req.body);
  users.save(function (error) {
    if (error) {
      return res
        .status(500)
        .send({ estado: 'error', msg: 'ERROR: Usuario NO guardado' });
    }
    return res.status(200).send({ estado: 'ok', msg: 'Usuario Guardado' });
  });
});

/**
 * Get a user
 */
router.get('/users/:doc', (req, res) => {
  const { doc } = req.params;
  userModelNino
    .findOne({ doc })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});
/**
 * Update a user/niño
 */
router.put('/users/:doc', (req, res) => {
  const { doc } = req.params;
  const { nom, apell, corr, cel, dir, fen, gen } = req.body;
  userModelNino
    .updateOne({ doc }, { $set: { nom, apell, corr, cel, dir, fen, gen } })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Delete a user/niño
 */
router.delete('/users/:doc', (req, res) => {
  const { doc } = req.params;
  const { nom, apell, corr, cel, dir, fen, gen } = req.body;
  userModelNino
    .remove({ doc }, { $set: { nom, apell, corr, cel, dir, fen, gen } })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});