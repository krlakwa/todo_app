import React from 'react';
import Todo from './Todo';
import style from './TodoList.css'

const TodoList = (props) => {
    const todo = props.data.map(task => <Todo key={task.id} id={task.id} remove={props.remove} text={task.text} />);
    
    return <ul className={style.TodoList}>{todo}</ul>
}

export default TodoList;