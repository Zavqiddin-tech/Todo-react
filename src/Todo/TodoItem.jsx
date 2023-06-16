import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context";
import './todo.css'

function TodoItem({ todo, index, onChange }) {

  const {removeTodo} = useContext(Context)


  const classes = []
  if (todo.completed) {
    classes.push('done')
  }

  console.log('todo', todo);
  return (
    <li className="todo-item">
      <span className={classes.join(' ')}>
        <input type="checkbox" checked={todo.completed} onChange={()=> onChange(todo.id)} /> &nbsp;
        <b>{index + 1}</b> &nbsp;
        {todo.title}
      </span>
      <button className="btn" onClick={()=> removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.protoTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
