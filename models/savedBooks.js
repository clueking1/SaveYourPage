const mongoose = require('mongoose')

const Schema = mongoose.Schema

const savedBooksSchema = new Schema({
    bookId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    snip: {
        type: String,
    },
    link: {
        type: String,
    },
    img: {
        type: String,
    }

})

const SavedBooks = mongoose.model('SavedBooks', savedBooksSchema)

module.exports = SavedBooks