import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

const {Provider, Consumer} = React.createContext()

class GlobalProvider extends Component{
    constructor(){
        super()

        this.state = {
            jobs: [],
            oneJob: '',
            cat: ''
        }
    }

    componentDidMount(){
        this.setState({
            jobs: JSON.parse(localStorage.getItem('jobs')) || [],
            oneJob: JSON.parse(localStorage.getItem('oneJob')) || ''
        })
        axios.get('/cats.json').then((response) => {
            let i = Math.floor(Math.random() * (response.data.length - 0) + 0)
            this.setState({
                cat: response.data[i].url
            })
        })
    }

    getJobs = ({description, location, fullTime}) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}&location=${location}`).then((response) => {
                console.log(response.data.length)
                this.setState({jobs: response.data})
                localStorage.jobs = JSON.stringify(this.state.jobs)
                response.data.length === 0 ? this.props.history.push('/not-found') : this.props.history.push('/results-page')
        })
    }

    setJob = (id) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://jobs.github.com/positions/${id}.json`).then((response) =>{
             this.setState({oneJob: response.data})
             localStorage.oneJob = JSON.stringify(this.state.oneJob)
        })
    }


    render(){
        const value = {
            getLocal: this.getLocal,
            getJobs: this.getJobs,
            setJob: this.setJob,
            ...this.state
        }
        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export default withRouter(GlobalProvider);

export const withGlobal = C => props => (
<Consumer>
{value => <C {...value}{...props}/>}
</Consumer>
)