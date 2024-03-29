if (process.env.NODE_ENV == "development") {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

// initializations
const app = express();
require('./database');


// settings 

app.set('port', process.env.PORT || 3000);

//middlewares

app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));

    }
});
app.use(multer({ storage }).single('image')); // ACA HABRIA QUE MODFICAR PARA TECNO PARA SUBIR VARIAS IMAGENES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes


app.use('/api/books', require('./routes/book'));

//STATICS FILES
app.use(express.static(path.join(__dirname, 'public')));

// start the servert

app.listen(app.get('port'), () => {

    console.log('server on port', app.get('port'));


});