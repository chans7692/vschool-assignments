import React from 'react'
import CardsTemp from './CardsTemp'

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

const Cards = () => {

    const mappedSpots = vacationSpots.map((newCard)=>{
        return <CardsTemp card={newCard} />
    })
    return (
        <div id='new-spots'>
            {mappedSpots}
        </div>
    )
}

export default Cards