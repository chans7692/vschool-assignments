const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 7692

// Global Middleware for request
app.use(express.json()) // request.body

app.use('/bounty', require('./routes/bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounty-hunter', 
    {  
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
            console.log('Connected to MongoDB')
    })

// Define what data my website needs to store               => Schema aka Mongoose models
// How am I or the user going to interact with that data    => Routes with Endpoints

// Plural: Collection
// Document: Single

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
