import React, {Component} from 'react'
import Axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      background: ''
    }
  }

  componentDidMount() {
    Axios.get('http://www.colr.org/json/color/random').then((response) => {
      console.log(response.data.colors[0].hex)
      this.setState({
        background: '#'+response.data.colors[0].hex
      })
    })
  }
  render() {
  const background = this.state.background
  const style = {
    background: background,
    height: '500px',
    width: '500px',
  }
  console.log(background)
    return (
      <div className='app' style={style}>
      </div>
    )
  }

}

export default App;