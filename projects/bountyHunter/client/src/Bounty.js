import React from 'react';

const Bounty = (props) => {
    console.log(props)
    let {firstName, lastName, type, bountyAmount, isAlive, id} = props.title
    console.log(isAlive)
    return (
        <div>
            <h1>Name: {firstName} {lastName}</h1>
            <h3>{type}</h3>
            <h3>Alive: {isAlive ? 'true' : 'false'}</h3>
            <h3>Bounty: ${bountyAmount}</h3>
            <button onClick={props.deleteBounty(id)}>Delete</button>
        </div>
    );
};

export default Bounty;