import React from 'react';

const TodoList = (props) => {
    const todo = props.data.map(task => <li key={task.id}>{task.text}</li>);
    
    return <ul>{todo}</ul>
}

export default TodoList;