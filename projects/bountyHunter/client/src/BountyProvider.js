import React, { Component } from 'react';
import axios from 'axios';

const {Provider, Consumer} = React.createContext()

class BountyProvider extends Component {
    constructor(){
        super()

        this.state = {
            bountys: []
        }
    }

    getBountys = () => {
        axios.get('bounty').then((response)=> {
            this.setState({bountys: response.data})
        })
    }

    addBounty = (newBounty) => {
        axios.post('bounty', newBounty).then((response) => {
            this.setState(prevState => ({
                bountys: [...prevState.bountys, response.data]
            }))
        })
    }

    editBounty = (newBountyData) => {
        axios.put('bounty', newBountyData).then((response) => {
            this.setState(prevState => ({
                bountys: [...prevState.bountys, response.data]
            }))
        })
    }

    deleteBounty = (ID) => {
        axios.delete(`bounty/${ID}`)}

    render() {
        return (
            <Provider value={{
                ...this.state,
                getBountys: this.getBountys,
                addBounty: this.addBounty,
                editBounty: this.editBounty,
                deleteBounty: this.deleteBounty
            }} >
                {this.props.children}
            </Provider>
        );
    }
}

export default BountyProvider;

export const withBounty = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
  )

