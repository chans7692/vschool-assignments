import React from 'react';
import {withGlobal} from './GlobalProvider'
import { Link } from 'react-router-dom'

const Results = (props) => {
    let {id, type, created_at, company, company_url, location, title} = props.mJob
    return (
        <div className='job-card'>
            <div>
                <Link to='/job-page' onClick={() => props.setJob(id)}><h2>{title}</h2></Link>
                <p><a href={company_url}>{company}</a>-{type}</p>
            </div>
            <div>
                <h4>{location}</h4>
                <p>{created_at}</p>
            </div>
        </div>
    );
}

export default withGlobal(Results);