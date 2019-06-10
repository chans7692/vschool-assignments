const express = require("express");
const uugameID = require('uuid/v4')
const app = express();
const data = require('./dadabase')

app.use(express.json())

app.get('/game', (request, response) => {
    response.send(data);
});

app.get('/game/:gameID', (request, response) => {
    response.send(data)
})

app.post('/game', (request, response) => {
    const newgame = Request.body
    newgame._id = uuid()
    data.push(newgame)
    response.send(newgame);
});

app.delete('/game/:gameID', (request, response) => {
    data.forEach((game, i) => {
        if(request.params.gameID === game._id){
            return data.splice(i, 1)
        }
    })
    response.send('Delete Successfull')
})

app.put('/game/:gameID', (request, response) => {
    const gameUpdated = data.find(game => game._id === request.params.gameID)
    response.send(gameUpdated)
})

app.put('/game/:gameID', (request, response) => {
    const gameUpdated = request.body
    data.map(game => {
        if(request.params.simethingid === game._id){
            return Object.assign(game, gameUpdated)
        } else {
            return game
        }
    })
    response.send(data)
})

app.listen(7692);