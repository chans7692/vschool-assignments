import React from 'react';
import {withGlobal} from './GlobalProvider';
import ResultsList from './ResultsList'

const Search = (props) => {
    let {type, company, company_url, company_logo, location, title, description, how_to_apply} = props.oneJob
    return(
        <>
            <div className='top'>
                <div className='title'>
                    <p>{type}/{location}</p>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className='main-container'>
                <div className='container-left' dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className='container-right'>
                    <div className='company'>
                        <div>
                            <h3>{company}</h3>
                        </div>
                        <div>
                            <img src={company_logo} alt="" />
                        </div>
                        <div>
                            <a href={company_url}>{company_url}</a>
                        </div>
                        <h4 className='apply' dangerouslySetInnerHTML={{ __html: how_to_apply }}>
                        </h4>
                    </div>
                    <div className='results'>
                        <ResultsList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default withGlobal(Search)