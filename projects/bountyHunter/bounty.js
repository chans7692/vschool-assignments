const express = require("express");
const uubountyID = require('uuid/v4')
const app = express();
const data = require('./dadabase')

app.use(express.json())

app.get('/bounty', (request, response) => {
    response.send(data);
});

app.get('/bounty/:bountyID', (request, response) => {
    response.send(data)
})

app.post('/bounty', (request, response) => {
    const newbounty = request.body
    newbounty._id = uubountyID()
    data.push(newbounty)
    response.send(newbounty);
});

app.delete('/bounty/:bountyID', (request, response) => {
    data.forEach((bounty, i) => {
        if(request.params.bountyID === bounty._id){
            return data.splice(i, 1)
        }
    })
    response.send('Delete Successfull')
})

app.put('/bounty/:bountyID', (request, response) => {
    const bountyUpdated = data.find(bounty => bounty._id === request.params.bountyID)
    response.send(bountyUpdated)
})

app.put('/bounty/:bountyID', (request, response) => {
    const bountyUpdated = request.body
    data.map(bounty => {
        if(request.params.simethingid === bounty._id){
            return Object.assign(bounty, bountyUpdated)
        } else {
            return bounty
        }
    })
    response.send(data)
})

app.listen(7692);