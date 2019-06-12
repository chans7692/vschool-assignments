const readlineSync = require('readline-sync')
const name = readlineSync.question('Welcome Adventure, what is your name?: ')
const enemies = ["paladin", "lurker", "gasBag", "soul", "wolf", "basilicanth", "troll", "executioner", "trolgg", "fear", "ogre"]
    
let player = [
	this.name = name,
	this.isAlive = true,
    this.playerHp = 50
]
let enemy = [
    this.name = "",
	this.hp = 50,
    this.isAlive = null,
    this.enemyCount = 1
]

console.log(player)
console.log(enemy)

	const generateRandomEnemy = function() {
		const randomInt = Math.floor(Math.random() * (0, enemies.length) + 0)
		enemy = enemies[randomInt]
		return enemy
    }
    
	let playerAction = function() {
		const action = readlineSync.keyInSelect('What do you want to do?, enter [r] to run or [a] to attack: ').toLowerCase()
		const playerAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25)

		switch(action) {
			case 'r':
				console.log(`You have ran from the ${enemy.name}`)

				break
			case 'a':
				enemy.Hp -= playerAttackPower
				console.log(`You just attacked ${enemy.name} for ${playerAttackPower} points`)
				break
			default:
				console.log('Please enter a valid key')
		}

	}

	let enemyAttack = function() {
		if(player.isAlive === true && enemy.hp > 0) {
			const enemyAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25)
			playerHp -= enemyAttackPower
			console.log(`${enemy.name} just attacked you for ${enemyAttackPower} points`)

			if(playerHp <= 0) {
				player.isAlive = false
				console.log(`${enemy.name} has killed ${player.name}` )
			}

		} else if (enemy.hp <= 0) {
			enemy.isAlive = false
			enemyCount++
			console.log(`${player} has killed ${enemy}`)
		}
    }
        
	let restoreEnemy =  function() {
		enemy.isAlive = true
		enemy.hp = 50
	}
    
	let processAttack = function() {
		if(enemy.isAlive) {
			while(enemy.hp > 0 && player.isAlive === true) {
				playerAction()
				enemyAttack()
			}
		}
	}

	let motion = function() {
		enemy.isAlive = true
		readlineSync.keyIn('Press any key to walk: ')
        generateRandomEnemy()
        console.log(`A ${enemy.name} has appeared`)
		processAttack()

		while(enemy.isAlive === false && enemyCount <= enemies.length) {
			readlineSync.keyIn('Press any key to move forward')
			generateRandomEnemy()
			console.log(`A ${enemy.name} has appeared`)
			restoreEnemy()
			processAttack()
		}

		if (enemy.isAlive === false) {
			console.log(`${player.name} has won!`)
		}
    }



	
	motion()

