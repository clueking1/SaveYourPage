const router = require('express').Router()
let SavedBooks = require('../models/savedBooks')

router.route('/').get((_, res) => {
    SavedBooks.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').post((req, res) => {
    const bookId = req.params.id

    const newBook = new SavedBooks({
        bookId
    })

    newBook.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err ))

})

router.route('/:id').delete((req, res) => {
    SavedBooks.findByIdAndDelete(req.params.id)
        .then(() => res.json('Book deleted!'))
})

module.exports = router