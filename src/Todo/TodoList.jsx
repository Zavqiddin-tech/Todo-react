import React from "react";
import TodoItem from "./TodoItem";

import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((item, index) => {
        return (
          <TodoItem
            todo={item}
            index={index}
            key={item.id}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

// TodoList.PropTypes = {
//   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default TodoList;
