import React from 'react'

const Badge = (props) => {
    console.log(props.card)
    const{fName, lName, phone, birth, food, email, about} = props.card
    return(
        <>
        <div className='badge-header'>
            <h1>Badge:</h1>
        </div>
        <div className='badge'>
            <h2>Name:{fName}{lName}</h2>
            <h2>Phone:{phone}</h2>
            <h2>Place of Birth:{birth}</h2>
            <h2>Favorite Food:{food}</h2>
            <h2>Email:{email}</h2>
            <div>
                <p>{about}</p>
            </div>
        </div>
        </>
    )
}

export default Badge