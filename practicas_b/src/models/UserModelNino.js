const mongoose = require('mongoose');

// En mongoose, los modelos suelen llamarse schemas, por ende
// guardaremos el modelo de nuestros usarios en la siguiente constante
// y haremos uso del método .Schema() de mongoose que se encarga de 
// crear un nuevo modelo.
const userSchema = mongoose.Schema({

nom: {
    type: String,
    required: true
},
apell: {
    type: String,
    required: true
},
fen: {
    type: String,
    required: true
},
gen:{
    type: String,
    required: true
},
doc: {
    type: Number,
    required: true
},


});



//Exportamos el modelo del usuario con mongoose.model que recibirá como
// parámetro el nombre como lo vas a usar, y lo que vas a exportar
const userModelNino = mongoose.model('usersN', userSchema);
exports.userModelNino = userModelNino;