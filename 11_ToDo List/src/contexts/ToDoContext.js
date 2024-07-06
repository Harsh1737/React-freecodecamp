import {createContext, useContext } from "react";

export const ToDoContext = createContext(
    {
        todos: [
            {   id:1,
                todo: "",
                completed: false
            }
        ],
        addTodo: (todo) => {},
        updateTodo: (id,todo) => {},
        deleteTodo: (id) => {},
        toggleComplete: (id) => {},
    }
);

export const ToDoProvider = ToDoContext.Provider;

export default function useToDo() {
    return useContext(ToDoContext); //useContext is a hook that allows you to use the context
}
//Exporting a hook to avoid the need to import ToDoContext in every component that uses it