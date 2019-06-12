import React from 'react'

const Color = (props) => {
    console.log(props.color)

    let color = props.color
    return (
        <div style={{background: color}}>
        </div>
    )
}

export default Color