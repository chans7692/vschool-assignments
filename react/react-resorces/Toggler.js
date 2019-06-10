class Toggler extends Component {
    constructor() {
      super()
      this.state = {
        on: false
      }
    }
    toggle() {
      this.setState(({ on }) => ({ on: !on }))
    }
    render() {
      const { on } = this.state;
      const { component , ...props } = this.props;
      const C = component;
      return (
        <C on={on}toggle={this.toggle}{...props}/>
      )
    }
  }

export const withToggler = C => props => <Toggler component={C}{...props}/>

//-------------------------------------------------------------------------
import {withToggler} from "./Toggler.js"

function functionName({ on, toggle}) {
  return (
    <div>
      <button onClick={toggle}>{on ? "on" : "off"}</button>
    </div>
  )
}

//call withToggler with functionName as an argument
export default withToggler(functionName);
