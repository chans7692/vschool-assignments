const express = require("express");
const uuserverID = require('uuid/v4')
const app = express();
const data = require('./dadabase')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/server')

app.get('/server', (request, response) => {
    response.send(data);
});

app.get('/server', (request, response) => {
    if (request.query.timeToGo && request.query.price){
        console.log(typeof request.query.price)
        const timeToGoResults = data.filter(server => server.timeToGo === request.query.timeToGo)
        const final = timeToGoResults.filter(server => server.price == request.query.price)
        response.send(final)
    }
 
 })

app.get('/server/:serverID', (request, response) => {
    response.send(data)
})

app.post('/server', (request, response) => {
    const newserver = request.bodycd
    newserver._id = uuserverID()
    data.push(newserver)
    response.send(newserver);
});

app.delete('/server/:serverID', (request, response) => {
    data.forEach((server, i) => {
        if(request.params.serverID === server._id){
            return data.splice(i, 1)
        }
    })
    response.send('Delete Successfull')
})

app.put('/server/:serverID', (request, response) => {
    const serverUpdated = data.find(server => server._id === request.params.serverID)
    response.send(serverUpdated)
})

app.put('/server/:serverID', (request, response) => {
    const serverUpdated = request.body
    data.map(server => {
        if(request.params.simethingid === server._id){
            return Object.assign(server, serverUpdated)
        } else {
            return server
        }
    })
    response.send(data)
})

app.listen(7692);