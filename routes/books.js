const router = require('express').Router()
let SavedBooks = require('../models/savedBooks')

router.route('/').get((_, res) => {
    SavedBooks.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').post(({ body }, res) => {
    bookId = body.bookId
    title =  body.title
    author = body.author
    snip = body.snip
    link = body.link
    img = body.img

    const newBook = new SavedBooks({
        bookId,
        title,
        author,
        snip,
        link,
        img
    })

    newBook.save()
        .then(() => res.json('hi'))
        .catch(err => res.status(400).json('Error: ' + err ))

})

router.route('/:id').delete((req, res) => {
    SavedBooks.findByIdAndDelete(req.params.id)
        .then(() => res.json('Book deleted!'))
})

module.exports = router