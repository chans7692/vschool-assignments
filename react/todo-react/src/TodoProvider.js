import React, { Component } from 'react';
import axios from 'axios';

const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
    }

    getTodos = () => {
        axios.get('https://api.vschool.io/charles/todo').then((response)=> {
            this.setState({todos: response.data})
        })
    }

    addTodo = (newTodo) => {
        axios.post('https://api.vschool.io/charles/todo', newTodo).then((response) => {
            this.setState(prevState => ({
                todos: [...prevState.todos, response.data]
            }))
        })
    }

    editTodo = (newTodoData) => {
        axios.put('https://api.vschool.io/charles/todo', newTodoData).then((response) => {
            this.setState(prevState => ({
                todos: [...prevState.todos, response.data]
            }))
        })
    }

    deleteTodo = () => {
        axios.delete(`https://api.vschool.io/charles/todo/`)}

    render() {
        return (
            <Provider value={{
                ...this.state,
                getTodos: this.getTodos,
                addTodo: this.addTodo
            }} >
                {this.props.children}
            </Provider>
        );
    }
}

export default TodoProvider;

export const withTodos = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
  )