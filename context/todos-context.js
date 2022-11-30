import React, { createContext, useState } from "react";
import Todo from "../models/todo";

export const TodosContext = createContext({
  items: [],
  completedItems: [],
  addItem: () => {},
  removeItem: (id) => {},
  clearItems: () => {},
});

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodoHandler = (enteredTodo) => {
    const newTodo = new Todo(enteredTodo);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeItemHandler = (todoId) => {
    for (const item in todos) {
      if (todos[item].id === todoId) {
        todos[item].completed = true;
        const completed = [todos[item]];
        setCompletedTodos((prevTodos) => {
          return prevTodos.concat(completed);
        });
      }
    }

    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const clearItemsHandler = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id === '')
    })

    setCompletedTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id === '')
    })
  }

  const contextValue = {
    items: todos,
    completedItems: completedTodos,
    addItem: addTodoHandler,
    removeItem: removeItemHandler,
    clearItems: clearItemsHandler
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
