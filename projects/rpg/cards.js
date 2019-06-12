let cards = [5, 5, 5, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 100, 100, 100]
let inventory = []

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function drawCard() {
    let draw = getRandom(0, cards.length)
    let newCards = cards.slice(draw, draw + 1)
    cards.splice(draw, 1)
    inventory.push(newCards)
}


while (inventory.length < 6) {
    drawCard()
}
console.log(inventory)