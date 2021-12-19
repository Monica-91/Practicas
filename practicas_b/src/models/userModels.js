const mongoose = require('mongoose');
const { genSalt, hash } = require("bcryptjs");

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
cla: {
    type: String,
    required: true
},
corr:{
    type: String,
    required: true
},
cel: {
    type: Number,
    required: true
},
dir: {
    type: String,
    required: true
},
fen: {
    type: String,
    required: true
},
gen: {
    type: String,
    required: true
},
doc: {
    type: Number,
    required: true
},
rol: {
  type:String,
  requerid:true
}

});

userSchema.pre("save", async function (next) {
    const salt = await genSalt(10);
    this.cla = await hash(this.cla, salt);
    next();
})
//Exportamos el modelo del usuario con mongoose.model que recibirá como
// parámetro el nombre como lo vas a usar, y lo que vas a exportar
const userModel = mongoose.model('users', userSchema);
exports.userModel = userModel;