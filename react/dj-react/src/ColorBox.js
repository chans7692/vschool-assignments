import React from 'react'
import Color from './Color'

class App extends React.Component {
    constructor(){
       super()

       this.state = {
           color: ["white", "white", "white", "white"]
       }
    }
    }
    const mappedColors = this.state.color.map((color)=>{
        return <Color card={color} />
    })

render(){
    return (
        <div id='colorContainer'>
            {mappedColors}
        </div>
    )
}

export default ColorBox