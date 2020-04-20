const mongoose = require('mongoose')

const Schema = mongoose.Schema

const savedBooksSchema = new Schema({
    bookId: {
        type: String,
        required: true
    }
})

const SavedBooks = mongoose.model('SavedBooks', savedBooksSchema)

module.exports = SavedBooks