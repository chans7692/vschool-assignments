// Players---------------------------------------------------------------------------
const players = playerName()

//Player Template--------------------------------------------------------------------
function player(name) {
    this.name = name;
    this.hp = 100;
    this.attack = ()=>readline.keyInSelect(this.inventory, "How will you attack?");
    this.inventory = [];
    this.prestige = [];
}
//Player Template--------------------------------------------------------------------
//Name your Character-----------------------------------------------------------------
function playerName() {
    if (playerNum <= 3) {
        let player1 = new player(readline.question("What is player ones name?"))
        let player2 = new player(readline.question("What is player twos name?"))
        let player3 = new player(readline.question("What is player threes name?"))
        let playerList = [player1, player2, player3]
        return playerList
    } else if (playerNum === 4) {
        let player1 = new player(readline.question("What is player ones name?"))
        let player2 = new player(readline.question("What is player twos name?"))
        let player3 = new player(readline.question("What is player threes name?"))
        let player4 = new player(readline.question("What is player fours name?"))
        let playerList = [player1, player2, player3, player4]
        return playerList
    } else if (playerNum === 5) {
        let player1 = new player(readline.question("What is player ones name?"))
        let player2 = new player(readline.question("What is player twos name?"))
        let player3 = new player(readline.question("What is playerthrees name?"))
        let player4 = new player(readline.question("What is player fours name?"))
        let player5 = new player(readline.question("What is player fives name?"))
        let playerList = [player1, player2, player3, player4, player5]
        return playerList
    } else {
        let player1 = new player(readline.question("What is player ones name?"))
        let player2 = new player(readline.question("What is player twos name?"))
        let player3 = new player(readline.question("What is player threes name?"))
        let player4 = new player(readline.question("What is player fours name?"))
        let player5 = new player(readline.question("What is player fives name?"))
        let player6 = new player(readline.question("What is player sixes name?"))
        let playerList = [player1, player2, player3, player4, player5, player6]
        return playerList
    }
}
//Name your Character-----------------------------------------------------------------
//Players-----------------------------------------------------------------------------