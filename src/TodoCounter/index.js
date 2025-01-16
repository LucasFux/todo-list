import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter({total, completed}){
  const {completedTodos, totalTodos } = React.useContext(TodoContext)

  if (totalTodos===0){
    return(
      <h1>Todavía no hay tareas a completar</h1>
    )

  } else if (totalTodos===completedTodos){
    return(<h1>Completaste todas las tareas</h1>)

  } else {
    return(
      <h1>Completadas {completedTodos} de {totalTodos} tareas</h1>
    )} 
  }

  export {TodoCounter};