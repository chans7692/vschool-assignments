import React, { Component } from 'react';
import {withTodos} from './TodoProvider';
import Todo from './Todo';

class TodoList extends Component {

    componentDidMount (){
        this.props.getTodos()
    }
    
    render() {
        const mappedTodos = this.props.todos.map((todo)=> <Todo title={todo.title} />)
        return (
            <div>
               {mappedTodos} 
            </div>
        );
    }
}

export default withTodos(TodoList);