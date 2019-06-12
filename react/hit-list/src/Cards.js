import React from 'react'

const Cards = (props) => {
    console.log(props.card)

    let {name, image} = props.card
    return (
        <div>
            <img src={image} />
            <div className='name'><p>{name}</p></div>
        </div>
    )
}

export default Cards