import React from 'react'
import Color from './Color'

class ColorBox extends React.Component {
        constructor() {
            super()

            this.state = {
                color: ["white", "white", "white", "white"]
            }
        }

        changeAll = () => {
            if (this.state.color[0] === "white") {
                this.setState({
                    color: ["black", "black", "black", "black"]
                })
            } else {
                this.setState({
                    color: ["white", "white", "white", "white"]
                })
            }
        }

        changeTop = () => {
            this.setState(prevState => {
                return {
                    color: ['purple', 'purple', prevState, prevState]
                }
            })
        }

        changeLeft = () => {
            this.setState(prevState => {
                return {
                    color: [prevState, prevState, 'blue', prevState]
                }
            })
        }

        changeRight = () => {
            this.setState(prevState => {
                return {
                    color: [prevState, prevState, prevState, 'blue']
                }
            })
        }

        changeTopLeft = () => {
            this.setState(prevState => {
                return {
                    color: ['red', prevState, prevState, prevState]
                }
            })
        }

        changeTopRight = () => {
            this.setState(prevState => {
                return {
                    color: [prevState, 'blue', prevState, prevState]
                }
            })
        }

        changeBottomLeft = () => {
            this.setState(prevState => {
                return {
                    color: [prevState, prevState, 'yellow', prevState]
                }
            })
        }

        changeBottomRight = () => {
            this.setState(prevState => {
                return {
                    color: [prevState, prevState, prevState, 'green']
                }
            })
        }

render(){
    const mappedColors = this.state.color.map((color)=>{
        return <Color color={color} />
    })
    return (
        <div id='colorContainer'>
            {mappedColors}
            <button onClick={this.changeAll}></button>
            <button onClick={this.changeTop}></button>
            <button onClick={this.changeLeft}></button>
            <button onClick={this.changeRight}></button>
            <button onClick={this.changeTopLeft}></button>
            <button onClick={this.changeTopRight}></button>
            <button onClick={this.changeBottomLeft}></button>
            <button onClick={this.changeBottomRight}></button>
            {console.log(this.state.color[0])}
        </div>
    )
}
}

export default ColorBox