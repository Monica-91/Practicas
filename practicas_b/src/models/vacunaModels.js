const mongoose = require('mongoose');

// En mongoose, los modelos suelen llamarse schemas, por ende
// guardaremos el modelo de nuestros usarios en la siguiente constante
// y haremos uso del método .Schema() de mongoose que se encarga de 
// crear un nuevo modelo.
const vacunaSchema = mongoose.Schema({

nom: {
    type: String,
    required: true
},

cod: {
    type: Number,
    required: true
},

cantmin: {
    type: Number,
    required: true
},
cant: {
    type: Number,
    required: true
},


});

userSchema.pre("save", async function (next) {
    const salt = await genSalt(10);
    this.cla = await hash(this.cla, salt);
    next();
})
//Exportamos el modelo del usuario con mongoose.model que recibirá como
// parámetro el nombre como lo vas a usar, y lo que vas a exportar
const vacunaModel = mongoose.model('vacuna', vacunaSchema);
exports.vacunaModel = vacunaModel;