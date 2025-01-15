import React from "react";
import { TodoCounter } from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';


function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onComplete,
    deleteTodo,
    addNewTodo,
}){
    return (
        <React.Fragment>
          <TodoCounter
            completed={completedTodos}
            total={totalTodos}
            />
          <TodoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
    
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => onComplete(todo.text)}
              deleteTodo={()=>deleteTodo(todo.text)}
              />
              
            ))}
          </TodoList>
    
          <CreateTodoButton
          addNewTodo = {addNewTodo}
          />
    
        </React.Fragment >
      );
}

export {AppUI}