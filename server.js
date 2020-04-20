const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/books')
const cors = require('cors')

const app = express()


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/books', bookRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
} 



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/saveyourpage', 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connected')
})

app.listen(PORT, function() {
    console.log(`API running on port: ${PORT}`)
})
