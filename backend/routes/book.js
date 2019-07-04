const {Router}=require('express');

const router=Router();
const Book= require('../models/Book');



router.get('/', async (req,res)=>{
    const books = await Book.find();// creo que es el find all de sequelize
    res.json(books);

});

//router.post()



module.exports = router;