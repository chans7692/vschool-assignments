import React from 'react';
import {withGlobal} from './GlobalProvider';
import Form from './Form'
import ResultsList from './ResultsList'

const Search = (props) => {
    return(
        <>
          <Form />
          <ResultsList />
        </>
    )
}

export default withGlobal(Search)