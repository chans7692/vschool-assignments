const express = require('express')
const serverRouter = express.Router()
const bounty = require('../models/bounty')

serverRouter.route('/')

// Get Server Array
    .get((request, response) => {
        bounty.find((err, bountys)=> {
            if (err) {response.status(500) 
                return response.send(err)}
            return response.status(200).send(bountys)
        })
    })

// Add Server Object
    .post((request, response) => {
        const newbounty = new bounty(request.body)
        newbounty.save((err, new_bounty) => {
            if (err) {response.status(500) 
                return response.send(err)}
            return response.status(201).send(new_bounty)
        })
      
    })

serverRouter.route('/:id')

// Search Server Object
    .get((request, response) => {
        bounty.findOne({_id:request.params.id}, (err, bounty) => { 
            if (err) {response.status(500) 
                return response.send(err)}
            return response.status(200).send(bounty)
        })
    })

// Delete Server Object
    .delete((request, response) => {
        bounty.findOneAndDelete({_id:request.params.id}, (err)=> {
            if (err) {response.status(500) 
                return response.send(err)}
            return response.status(200).send(`Successfully Deleted ${bounty.firstName, bounty.lastName}`)
        })
        
    })

// Update Server Object
    .put((request, response) => {
        bounty.findOneAndUpdate({_id:request.params.id}, request.body, {new: true}, (err, updatedBounty) => {
            if (err) {response.status(500) 
                return response.send(err)}
            return response.status(201).send(updatedBounty)
            })
    })


module.exports = serverRouter