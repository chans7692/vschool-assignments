import React, {Component} from 'react';
const {Consumer, Provider} = React.createContext()

class TodoProvider extends Component

constructor(){
    super()

    this.state{
        todos: []
    }
}

getTodos = () => {
    axios.get('url').then((response) => {
        this.setState({
            todos: {response.data}
        })
    })
}

addTodos = (newTodo) => {
    axios.post('url', newTodo).then((response) => {
        this.set(prevState())
    })
}

editTodos = () => {
    axios.put('url'todo._id, putTodo).then((response) => {
        this.setState(prevState())
    })
}

deleteTodos = () => {
    axios.delete('url'todo._id, removeTodo).then((response) => {
        this.setState(prevState())
    })
}

render(){
    const value = {
        getTodos: this.getTodos,
        addTodos: this.addTodos,
        ...this.state
    }
    return(
        <provider value=>
            {this.props.children}
        </Provider>
    )
}

export default TodoProvider

export const withTodo = C => props =>(<consumer>{value => <C {...value}{...props}/>}</consumer>)