import React, {Component} from 'react';
const {Consumer, Provider} = React.createContext()

class GlobalProvider extends Component{
    constructor(){
        super()

        this.state = {
            topPosition: '',
            topDisplay: '0px',
            navWidth: '50px',
            navHeight: '-93%',
            downDisplay: 'inline-block',
            upDisplay: 'none',
            showRes: 'block',
            position: ''
        }
    }

    componentDidMount() {
      window.addEventListener('scroll', ()=>this.scrollFunction());
      document.body.scrollTop = `${this.state.position}`
   }

   componentWillUnmount(){
       this.setState({
           position: document.body.scrollTop
       })
   }

    scrollFunction = () => {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? this.setState({topDisplay: "0px",}) : this.setState({topDisplay: "-50px"})
    }

    topFunction = () => {
        document.getElementsByTagName('body').scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    toggleNavLeft = () => {
        this.state.navWidth === '50px' ? this.setState({navWidth: '250px'}) : this.setState({navWidth: '50px'});
    }

    toggleNavTop = () => {
        this.state.navHeight === '-93%' ? this.setState({navHeight: '0', downDisplay: 'none', upDisplay: 'inline-block'}) : this.setState({navHeight: '-93%', downDisplay: 'inline-block', upDisplay: 'none'});
    }

  render(){
    const value = {
      scrollFunction: this.scrollFunction,
      topFunction: this.topFunction,
      toggleNavLeft: this.toggleNavLeft,
      toggleNavTop: this.toggleNavTop,
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