import React, { useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
import found from "./image/not found.jpg";
import AddTodo from "./Todo/AddTodo";
import {v4 as uuid} from 'uuid'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Bavariya" },
    { id: 2, completed: false, title: "Chelsi" },
    { id: 3, completed: false, title: "Manchester" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  // Remove todo
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }


  // Add todo
  function addTodo(title) {
    setTodos(
      todos.concat({
        title: title,
        id: uuid(),
        completed: false,
      })
    )
    console.log(todos);
  }


  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container">
        <h1>
          <span>React</span> Tutorial
        </h1>
        <AddTodo onCreate={addTodo}/>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <div className="box-img">
            <img src={found} alt="" />
          </div>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
