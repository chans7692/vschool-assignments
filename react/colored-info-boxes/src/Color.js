import React from 'react'

const Color = (props) => {
    console.log(props.card)

    let {title, subtitle, information, background, image} = props.card
    return (
        <div style={{background}}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{information}</p>
            <img src={image} />
        </div>
    )
}

export default Color