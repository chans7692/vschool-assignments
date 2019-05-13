const readline = require("readline-sync")
const c = require("chalk")
//Player-------------------------------------------------------------
const player = function (name) {
    this.name = name;
    this.potion = ["potion", "potion"];
    this.weapon = ["None"]
    this.hp = 100;
    this.attack = function () {
        if (player1.weapon[0] === "Knife") {
            return Math.floor(Math.random() * 30)
        } else if (player1.weapon[0] === "Bow") {
            return Math.floor(Math.random() * 60)
        } else if (player1.weapon[0] === "Sword") {
            return Math.floor(Math.random() * 75)
        } else {
            return Math.floor(Math.random() * 20)
        }
    }
}    //Weapon Changer-----------------------------------------------------
    let oldWeapon = []

    function changeWeapon() {
        oldWeapon = player1.weapon.pop()
        player1.weapon.unshift(oldWeapon)
        return player1.weapon
    }
//Enemy--------------------------------------------------------------
const monster = function (name, drops, hp, min, max) {
    this.name = name;
    this.drops = drops;
    this.startingHp = hp;
    this.hp = hp;
    this.attack = () => Math.floor(Math.random() * max) + min
}
let trolgg = new monster("Trolgg", "Knife", 50, 0, 15)
let battleTroll = new monster("Battle Troll", "Bow", 75, 0, 15)
let soulBinder = new monster("Soul Binder", "Sword", 100, 0, 20)
let antiPaladin = new monster("Anti-Paladin", "Key", 150, 0, 25)
const enemy = [trolgg, battleTroll, soulBinder, antiPaladin]
//Game Start---------------------------------------------------------
console.log('An artifact of untold power lies in your hands. To claim it, you must escape the caverns alive. Do you have what it takes to kill the monsters and win the key?')
let player1 = new player(readline.question("Welcome Adventure, what is your name? ", ))
//Game Loop----------------------------------------------------------
while (enemy.length > 0 && player1.hp > 0 || !player1.weapon[0] === "Key") {
    let action = readline.keyIn("If you want to go forward, press [w]. If you would like to veiw your inventory, press [i]", {limit: "wi"})
    if (action === "w") {
        forward()
    } else if (action === "i") {
        let use = readline.keyIn(`
        [c] Change Weapon: ${player1.weapon} 
        [p] Use Potion: ${player1.potion.length}-potions 
        [b] Back
         `,{
            limit: "cpb"
        })
        if (use === "p") {
            if (player1.potion.length > 0) {
                usePotion()
            }
        } else if (use === "c") {
            changeWeapon()
        } else {}
    }
    //Motion-------------------------------------------------------------
    function forward() {
        let i = Math.floor(Math.random() * 5) + 1
        if (i < 4) {
            console.log("So far, So Good")
        } else {
            encounter()
        }
    }

    //Use Potion-------------------------------------------------------------
    function usePotion() {
        player1.hp += Math.floor(Math.random() * 50) + 25
        player1.potion.splice(0, 1)
        console.log(player1.potion.length)
    }
    //Encounters----------------------------------------------------------
    function encounter() {
        let i = Math.floor(Math.random() * enemy.length) + 0
        console.log(`You have encounterd a ${enemy[i].name} ${enemy[i].hp}hp. `)
        while (enemy[i].hp > 0 && player1.hp > 0) {
            let battle = readline.keyIn(`
        [a] Attack
        [c] Change Weapon: ${player1.weapon[0]}
        [p] Use Potion: ${player1.potion.length}-potions
        [f] Flee
         `, {
                limit: "acpf"
            })
            //Battle---------------------------------------------------------------
            if (battle === "a") {
                console.log(`You strike and deliver a blow of ${player1.attack()} points`)
                enemy[i].hp -= player1.attack()
                if (enemy[i].hp > 0) {
                    console.log(`${enemy[i].name} attacks back for ${enemy[i].attack()} ponits`)
                    player1.hp -= enemy[i].attack()
                }
                //Change Weapon--------------------------------------------------------
            } else if (battle === "c") {
                changeWeapon()
                //Use Potion----------------------------------------------------------
            } else if (battle === "p") {
                console.log(`You have uesd a potion. You now have ${player1.potion.length} potions left.`)
                if (player1.potion.length > 0) {
                    usePotion()
                }
                //Flee----------------------------------------------------------------------
            } else if (battle === "f") {
                let flee = Math.floor(Math.random() * 2) + 0
                if (flee === 1) {
                    console.log("You have escaped unharmed")
                } else {
                    player1.hp -= player1.hp / 2
                    console.log(`${enemy[i].name} struck you in the back as you ran. Your health has been cut in half. Your hp is now at ${player1.hp}`)
                    enemy[i].hp = enemy[i].startingHp
                }
                break
            }
            //End Battle----------------------------------------------------------------------------
            console.log(`Your health is now at ${player1.hp}, and  ${enemy[i].name}'s health is at ${enemy[i].hp}.`)
            if (enemy[i].hp < 0 && player1.hp > 0) {
                player1.potion.push("potion")
                player1.weapon.unshift(enemy[i].drops)
                console.log(`You have aquired a ${enemy[i].drops} and one potion`)
                enemy.splice(i, 1)
                if(player1.weapon[0] != "Key"){
                console.log(`Only ${enemy.length} enemy left.`)}
                break
            } else {}
        }
    }
    //End Game-------------------------------------------------------------------------------
    if (player1.weapon[0] === "Key" || player1.hp > 0 && enemy.length < 0) {
        console.log("You have escaped the Dungeon and won the game.")
        break
    } else if (player1.hp <= 0) {
        console.log("You have died. Perhaps adventuring is not for you.")
        break
    }
}