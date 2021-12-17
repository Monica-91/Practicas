const express = require('express');
// Pasamos a importar el modelo de usuarios
const  { userModel } = require('../models/userModels');

// Hacemos uso del constructor de express llamado Router
// para la creación de un enrutador
const router = express.Router();

const { generateAccessToken } = require('../services/jwt');
const User = require('../models/userModels');
const bcrypt = require("bcryptjs");
const {authMiddleware} = require('../middleware/authMiddleware');
const ApiError = require('../utils/ApiError');

// Registro
router.post("/register", async (req, res, next) => {
    try {
      // Get user input
      const { name, username, email, password, passwordConfirmation } = req.body;
  
      // Validate user input
      if (!(email && password && name && username && passwordConfirmation)) {
          throw new ApiError("All input is required",400);
      }
  
      if (password !== passwordConfirmation) {
        throw new ApiError("Passwords do not match",400);
      }
  
      // Validamos la existencia del usuario en la base de datos
      const oldUser = await User.findOne({ email });
      console.log(oldUser);
  
      if (oldUser) {
        throw new ApiError("User Already Exist. Please Login",400);
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Creamos un usuario en la DB
      const user = await User.create({
        name,
        username,
        email, // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      res.status(200).json(user);
    } catch (err) {
      next(err);
      console.log(err);
    }
      
  });
/**
 * Create User
 */
router.post('/users', (req, res) => {
    const users = userModel(req.body);
    users
        .save()
        .then((data)=> res.json({estado:"ok",msg:"usuario guardado"}))
        .catch((error)=> console.error({message: error}))
});

/**
 * Get all users
 */
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});

/**
 * Get a user
 */
router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});

/**
 * Update a user
 */
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
        .updateOne({_id: id}, {$set: {name, age, email}})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});

/**
 * Delete a user
 */
router.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .remove({_id: id})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
});



router.post("/login", async (req, res, next) => {

    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).json({message: "All input is required" } );
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
  
        const accessToken = generateAccessToken(user._id, user.email);
        res.status(200).json({accessToken});
      }else{
        res.status(404).json({message: "User not found"});
      }
      
    } catch (err) {
      next(err);
      console.log(err);
    }
});

router.get("/findAll", authMiddleware, (req, res, next) => {

    User.find().exec()
    .then((docs) => {
        res.status(200).json(docs); //
    })
    .catch((error) => {
        console.log(error)
        res.status(404).json({message: "Not data Found"});
    })

});

module.exports = router;