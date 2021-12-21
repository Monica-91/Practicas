const express = require('express');
// Pasamos a importar el modelo de usuarios
const { userModel } = require('../models/userModels');

// Hacemos uso del constructor de express llamado Router
// para la creación de un enrutador
const router = express.Router();

const { generateAccessToken } = require('../services/jwt');
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const { compare } = require('bcryptjs');
const { authMiddleware } = require('../middleware/authMiddleware');
const { sign } = require('jsonwebtoken');
const { userSaveGuard } = require('../guards/userSaveGuard');
const ApiError = require('../utils/ApiError');

// login
router.post('/users/login', async function (req, res) {
  try {
    const { corr, password } = req.body; //{usuario:"us1", password:"123"}
    // Buscar en BD el usuario
    const user = await userModel.findOne({ corr });
    const pass = user.rol;
    // Preguntar si existe
    if (!user) {
      return res
        .status(401)
        .send({ estado: 'error', msg: 'Credenciales no válidas' });
    }

    // Comprobar password
    const passOK = await compare(password, user.cla);
    const passA = pass === 'admin';
    const passI = pass === 'interno';
    const passE = pass === 'externo';
    if (passOK && passA) {
      //Genera el token
      const token = sign(
        {
          usuario: user.corr,
          rol: user.rol,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).send({
        estado: 'ok',
        msg: 'Logueado :)',
        token,
        url: '/administrador',
        id_padre:user.corr,
      });
    } else if (passOK && passI) {
      //Genera el token
      const token = sign(
        {
          usuario: user.corr,
          rol: user.rol,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).send({
        estado: 'ok',
        msg: 'Logueado :)',
        token,
        url: '/interno',
      });
    } else if (passOK && passE) {
      //Genera el token
      const token = sign(
        {
          usuario: user.corr,
          rol: user.rol,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).send({
        estado: 'ok',
        msg: 'Logueado :)',
        token,
        url: '/externo',
      });
    } else {
      return res
        .status(401)
        .send({ estado: 'error', msg: 'Credenciales no válidas' });
    }
    // Enviar mensaje OK/Error
  } catch (error) {
    return res
      .status(401)
      .send({ estado: 'error', msg: 'Credenciales no válidas', error });
  }
});
/**
 * Create User Administrador interno
 */
router.post('/users', userSaveGuard, (req, res) => {
  const users = userModel(req.body);
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
 * Create User Externo
 */
router.post('/usersEx', (req, res) => {
  const users = userModel(req.body);
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
 * Get all users
 */
router.get('/users', async (req, res) => {
  userModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Get a user
 */
router.get('/users/:doc', (req, res) => {
  const { doc } = req.params;
  userModel
    .findOne({ doc })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Update a user
 */
router.put('/users/:doc', (req, res) => {
  const { doc } = req.params;
  const { nom, apell, corr, cel, dir, fen, gen } = req.body;
  userModel
    .updateOne({ doc }, { $set: { nom, apell, corr, cel, dir, fen, gen } })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

/**
 * Delete a user
 */
router.delete('/users/:doc', (req, res) => {
  const { doc } = req.params;
  userModel
    .remove({ doc })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

router.post('/login', async (req, res, next) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json({ message: 'All input is required' });
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = generateAccessToken(user._id, user.email);
      res.status(200).json({ accessToken });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
});

router.get('/findAll', authMiddleware, (req, res, next) => {
  User.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs); //
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ message: 'Not data Found' });
    });
});

module.exports = router;
