import React from 'react';
import {withTodos} from './TodoProvider'

const Todo = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                <li>
                    <button onclick={props.deleteTodo}>X</button><button >Edit</button>  {props.title}
                </li>
            
            </ul>
        </div>
    );
};

export default withTodos(Todo);