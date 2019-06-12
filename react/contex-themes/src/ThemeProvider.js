import React, {Component} from 'react';
const {Consumer, Provider} = React.createContext()

class ThemeProvider extends Component{
  constructor(){
    super()
    this.state = {
     theme: "dark"
    }
  }
  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }))
  }
  render(){
    const props = {
      toggleTheme: this.toggleTheme,
      ...this.state
    }
    return (
      <Provider value={props}>
        {this.props.children}
      </Provider>
    )
  }
}

export default ThemeProvider;

export const withTheme = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
  )