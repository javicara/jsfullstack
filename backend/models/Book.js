const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    imagePath: { type: String, required: true },
    created_at: { type: Date, default: Date.now }

});

// es como la definicion de una tabla
//tendria que leer un poco la docu de moongose o sequelize 

module.exports = model('Book',bookSchema);//este modole lo 