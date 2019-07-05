const { Router } = require('express');

const router = Router();
const Book = require('../models/Book');



router.get('/', async (req, res) => {
    const books = await Book.find();// creo que es el find all de sequelize
    res.json(books);

});

router.post('/create', async (req, res) => {

    const newBook = new Book(req.body);
    console.log(newBook);
    await newBook.save();

    res.json(
        {
            message: "book saved",
            data: newBook
        }
    )



});

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const bookDeleted = await Book.findByIdAndDelete(id);
    res.json({
        message:"this book was deleted",
        data:bookDeleted

    })
});


module.exports = router;