import React from 'react';
import {withGlobal} from './GlobalProvider';
import Results from './Results';

const ResultsList = (props) => {
const mappedJobs = props.jobs.map((job) => {return <Results mJob={job} />})
        return (
            <div>
                {mappedJobs} 
            </div>
        );
}

export default withGlobal(ResultsList);