let form = document.travel




form.addEventListener('submit', function(e){
    e.preventDefault()
    
const first = form.first.value
const last = form.last.value
const age = form.age.value
const gender = form.gender.value
const destination = form.destination.value
const food = form.diet
const cantEat = []

for(let i = 0; i < food.length; i++){
    if(food[i].checked){
        cantEat.push(' ' + food[i].value)
    }
}

const results = 
`First name: ${first}
Last name: ${last}
Age: ${age}
Gender: ${gender}
Destination: ${destination}
Dietary Restrictions: ${cantEat}`

    alert(
        results
    )
})