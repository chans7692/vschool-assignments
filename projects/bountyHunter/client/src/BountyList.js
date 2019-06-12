import React, { Component } from 'react';
import {withBounty} from './BountyProvider';
import Bounty from './Bounty';

class BountyList extends Component {

    componentDidMount (){
        this.props.getBountys()
    }
    
    render() {
        
        const mappedBountys = this.props.bountys.map((bounty)=> <Bounty bounty={bounty} />)
        return (
            <div>
               {mappedBountys} 
            </div>
        )
    }
}

export default withBounty(BountyList)