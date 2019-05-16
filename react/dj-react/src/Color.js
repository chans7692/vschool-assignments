import React from 'react'

const Color = (props) => {
    console.log(props.card)

    let {background} = props.card
    return (
        <div style={{background}}>
        </div>
    )
}

export default Color