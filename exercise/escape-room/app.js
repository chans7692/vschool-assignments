var readline = require("readline-sync");
var name = readline.question("What is your name? ");
console.log(`You wake up feeling lightheaded and sore. You dont remember what happend to you, all you know is that your name is ${name} and that you need to find your way back home.` )

var searchOps = ["Look around you.", "Go back to sleep."]

var search = readline.keyInSelect(searchOps, "What do you do next?")

if(searchOps[search] === searchOps[0]){
    console.log(`You look around you and find that you are in a small damp room with one lumpy matress and a locked door. on closer inspection you descover a small hole in the back corner.`)
    let key = ["flip over the matress.", "Search the hole."]
    var findKey = readline.keyInSelect(key, "Where should you look next?")
    if(key[findKey] === key[0]){
        console.log("Opon fliping the matress you hear a small clink. A key has fallen on the ground.")
        var openDoor = ["Use the key on the door.", "Throw the key in the hole."]
        var door = readline.keyInSelect(openDoor, "What should you do with the key?")
        if(openDoor[door] == openDoor[0]){
            
            console.log("You pet the key in the door an turn it. The door unlocks and swings smoothly into a britely let corador. You have escaped the room but who knows what you will have to face next.")
        } else if(openDoor[door] == openDoor[1]){
            console.log("you realise that that was a mistake and reach your hand in to get it back. Ass soon as your hand enters the hole a large spider jumps out and bites you. It was posionuos and you are going to die. GAME OVER!")
        }
    } else if(key[findKey] === key[1]){
        console.log("Ass soon as your hand enters the hole a large spider jumps out and bites you. It was posionuos and you are going to die. GAME OVER!")
    }
} else if(searchOps[search] === searchOps[1]){
    console.log("As you sleep a spider comes out of the hole and bites you. It was posionuos and you are going to die. GAME OVER!")
}