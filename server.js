const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/books')
const cors = require('cors')
const path = require("path");

const app = express()

const server = require('http').createServer(app);
const io = require('socket.io')(server)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/books', bookRoutes)

const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
} 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/saveyourpage', 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connected')
})




io.on('connection', function(client) {  
    
    

    io.to(client.id).emit('assign-socket', client.id)
    
    client.on('Clicked', function() {
        client.emit('saved', 'Book Saved!')
        client.broadcast.emit('saved', 'Book Saved!')
    })
    
    
    
})

server.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})

