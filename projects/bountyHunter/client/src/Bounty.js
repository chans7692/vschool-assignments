import React from 'react';
import {withBounty} from './BountyProvider'

const Bounty = (props) => {
    let {firstName, lastName, type, bountyAmount, isAlive, _id} = props.bounty
    console.log(props.bounty)
    console.log(_id)
    return (
        <div>
            <h1>Name: {firstName} {lastName}</h1>
            <h3>{type}</h3>
            <h3>Alive: {isAlive ? 'true' : 'false'}</h3>
            <h3>Bounty: ${bountyAmount}</h3>
            <button onClick={() => props.deleteBounty(_id)}>Delete</button>
        </div>
    )
}

export default withBounty(Bounty)