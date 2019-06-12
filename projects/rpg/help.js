let weapon = ['One', "two", "three", "four", "five"]

let oldWeapon = []

function changeWeapon(){
    oldWeapon = weapon.pop()
    weapon.unshift(oldWeapon)
    return weapon
}