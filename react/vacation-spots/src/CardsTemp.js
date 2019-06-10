import React from 'react'
import Cards from './Cards'

const CardsTemp = (props) => {
    console.log(props.card)

    let {place, price, timeToGo} = props.card
    return (
        <div>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <p>{timeToGo}</p>
        </div>
    )
}

export default CardsTemp