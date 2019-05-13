let readline = require("readline-sync");
let playerNum = readline.questionInt("How many are playing? ")

//Resources------------------------------------------------------------------------------
// Random Number Generator---------------------------------------------------------------
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
// Random Number Generator---------------------------------------------------------------
//Resources------------------------------------------------------------------------------

// Players-------------------------------------------------------------------------------
//Player Template------------------------------------------------------------------------
function player(name) {
    this.name = name;
    this.hp = 100;
    this.attack = () => readline.keyInSelect(this.inventory, "How will you attack? ");
    this.inventory = [];
    this.prestige = [];
}
//Player Template------------------------------------------------------------------------
//Name your Character--------------------------------------------------------------------
let players = []
let numP = ['one', 'two', 'three', 'four', 'five', 'six']
for (i = 0; i < playerNum; i++) {
    players[i] = new player(readline.question(`What is player ${numP[i]}'s name? `))
}
console.log(players)
//Name your Character---------------------------------------------------------------------
//Players---------------------------------------------------------------------------------
//Encounters------------------------------------------------------------------------------
//Encounter Template----------------------------------------------------------------------
function encounter(name, type, prestige, hp, attack) {
    this.name = name;
    this.type = type;
    this.prestige = prestige;
    this.hp = hp;
    this.attack = attack;
}
//Encounter Template----------------------------------------------------------------------
//Encounter Generator---------------------------------------------------------------------
const paladin = new encounter("Anti-Paladin", "Warrior", 3, hp(95, 50), attack(15, 50))
const lurker = new encounter("The Lurker", "Fiend", 2, hp(120, 40), attack(15, 50))
const gasBag = new encounter("Gas Bag", "Plant", 1, hp(10, 5), attack(15, 50))
const soul = new encounter("Soul Binder", "Warrior", 1, hp(90, 40), attack(15, 50))
const wolf = new encounter("Wolf Pack", "Beast", 1, hp(160, 40), attack(15, 50))
const basilicanth = new encounter("Basilicanth", "Fiend", 3, hp(200, 40), attack(15, 50))
const troll = new encounter("Battle Troll", "Warrior", 4, hp(160, 30), attack(15, 50))
const executioner = new encounter("Executioner", "Warrior", 3, hp(120, 40), attack(15, 50))
const trolgg = new encounter("Trolgg", "Beast", 4, hp(200, 50), attack(15, 50))
const fear = new encounter("Fear", "Incantation", 4, hp(150, 50), attack(15, 50))
const ogre = new encounter("Ogre's Challenge", "Challenge", 3, null, attack(15, 50))
const encounterList = [paladin, lurker, gasBag, soul, wolf, basilicanth, troll, executioner, trolgg, fear, ogre]
//Encounter Generator---------------------------------------------------------------------
//Encounter HP Generator------------------------------------------------------------------
function hp(base, multiple) {
    let start = base - multiple * 2
    if (player.length <= 3) {
        return base
    } else {
        while (player.length) {
            return (start - multiple) + player.length * multiple
        }
    }
}
//Encounter HP Generator------------------------------------------------------------------
//Encounter Attack------------------------------------------------------------------------
function attack(min, max) {
    return getRandom(min, max)
}
//Encounter Attack------------------------------------------------------------------------
// Encounter Number Generatoer------------------------------------------------------------
function munNum(playerNum) {
    while (playerNum) {
        return playerNum * 2
    }
}
// Encounter Number Generatoer------------------------------------------------------------
//Random Encounter Picker-----------------------------------------------------------------
function randomEncounter() {
    let randomE = getRandom(0, encounterList.length)
    let newEncounter = encounterList.slice(randomE, randomE + 1)
    encounterList.splice(randomE, 1)
    encounters.push(newEncounter)
}
let encounters = []
let eLength = encounter.length
while (encounters.length < munNum(playerNum)) {
    randomEncounter()
}
console.log(encounters)
console.log(eLength)
//Random Encounter Picker-----------------------------------------------------------------
//Gameplay--------------------------------------------------------------------------------
while(players.length > 0){
        //Motion------------------------------------------------------------------------------
        let action = readline.keyIn("If you want to go forward, press [w]. If you would like to veiw your inventory, press [i]")

        if (action === "w") {
            forward()
        } else if (action === "i") {
            console.log(player1.inventory)
            readline.keyInSelect(player1.inventory, "Use")
        }

        function forward() {
            let dice = getRandom(0, 15)
            if (dice <= 5) {
                console.log("The coast is clear")
            } else if (dice > 5 && dice <= 10) {
                fight()
            } else {
                trap()
            }
        }

        function left() {
            let dice = getRandom(0, 15)
            if (dice <= 5) {
                console.log("The coast is clear")
            } else if (dice > 5 && dice <= 7) {
                fight()
            } else {
                trap()
            }
        }

        function right() {
            let dice = getRandom(0, 15)
            if (dice <= 5) {
                console.log("The coast is clear")
            } else if (dice > 5 && dice <= 13) {
                fight()
            } else {
                trap()
            }
        }
        //Motion------------------------------------------------------------------------------
        //Fight-------------------------------------------------------------------------------
        function fight() {
            let index = getRandom(0, eLength)
            let enemy = encounters[index]
            console.log(`you have encounterd a ${enemy}.`)
            if(enemy.hp > 0){
                for(i = 0; i < players.length; i++){
                    enemy.hp -= players[i].attack
                }
                players.hp -= enemy.attack
            }
            for (i = 0; i < players.length; i++) {
                if (players[i].hp <= 1) {
                    players.splice(players[i], 1)
                    }}
        }
        //Fight-------------------------------------------------------------------------------
        //Trap--------------------------------------------------------------------------------
        function trap() {
            for (i = 0; i < players.length; i++) {
                players[i].hp -= getRandom(10, 20)
            
                if (players[i].hp <= 1) {
                    players.splice(players[i], 1)
                    }}
                    console.log('You have stumbled into a trap.')
        }
        //Trap--------------------------------------------------------------------------------
    }
    //Gameplay--------------------------------------------------------------------------------