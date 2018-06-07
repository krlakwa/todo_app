import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const todo = props.data.map(task => <Todo key={task.id} id={task.id} remove={props.remove} text={task.text} />);
    
    return <ul>{todo}</ul>
}

export default TodoList;