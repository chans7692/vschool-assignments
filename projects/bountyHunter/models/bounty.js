const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    type: String,
    bountyAmount: {
        type: Number,
        require: true
    },
    isAlive: false,
})

module.exports = mongoose.model('bounty', bountySchema)
