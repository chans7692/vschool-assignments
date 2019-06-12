const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serverSchema = new Schema({
    //server JSON
    title: String,
    price: Number,
    required: true,
})

module.exports = mongoose.model('server', serverSchema)