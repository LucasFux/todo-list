import React from "react";
import { TodoCounter } from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoContext } from "../TodoContext";

function AppUI(){
  const { loading, error, searchedTodos, onComplete, deleteTodo} = React.useContext(TodoContext)
    
  return (
    <>

      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer ToDo</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
          />

        ))}
      </TodoList>

      <CreateTodoButton />

    </>
      );
}

export {AppUI}