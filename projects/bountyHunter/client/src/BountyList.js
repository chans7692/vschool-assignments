import React, { Component } from 'react';
import {withBounty} from './BountyProvider';
import Bounty from './Bounty';

class BountyList extends Component {

    componentDidMount (){
        this.props.getBountys()
    }
    
    render() {
        console.log(this.props)
        
        const mappedBountys = this.props.bountys.map((bounty)=> <Bounty title={this.props} />)
        return (
            <div>
               {mappedBountys} 
            </div>
        );
    }
}

export default withBounty(BountyList);