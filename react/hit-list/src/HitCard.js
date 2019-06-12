import React, {Component} from 'react';
import Axios from 'axios';
import Cards from './Cards'

class HitCard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            image: '',
            hit: []
        }
    }

    componentDidMount() {
        Axios.get('http://s3.amazonaws.com/v-school/data/hitlist.json').then((response) => {
            this.setState({hit: response.data})
        })
    }


    render() {
        const mappedHits = this.state.hit.map((targets) => {
            return <Cards card={targets}/>
        })
        return ( 
        <div className='hit-cards'>
            {mappedHits}
        </div>
        );
    }
}

export default HitCard;