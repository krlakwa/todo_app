import React from 'react';
const test = (id, remove) => {
    console.log(id);
    remove(id);
}
const Todo = props => <li onClick={() => test(props.id, props.remove)}>{props.text}</li>

export default Todo;