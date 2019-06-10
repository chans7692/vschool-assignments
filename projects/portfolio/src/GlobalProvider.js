import React, {Component} from 'react';
const {Consumer, Provider} = React.createContext()

class GlobalProvider extends Component{
    constructor(){
        super()

        this.state = {
            topPosition: '',
            topDisplay: '0px',
            navWidth: '50px',
        }
    }

    componentDidMount() {
      window.addEventListener('scroll', ()=>this.scrollFunction());
   }

    scrollFunction = () => {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? this.setState({topDisplay: "0px",}) : this.setState({topDisplay: "-50px"})
    }

    topFunction = () => {
        document.getElementsByTagName('body').scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    openNav = () => {
        this.state.navWidth === '50px' ? this.setState({navWidth: '250px'}) : this.setState({navWidth: '50px'})
    }

  render(){
    const value = {
      scrollFunction: this.scrollFunction,
      topFunction: this.topFunction,
      openNav: this.openNav,
      ...this.state
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export default GlobalProvider;

export const withGlobal = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
  )