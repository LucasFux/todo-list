import './TodoCounter.css';

function TodoCounter({total, completed}){
  if (total===completed){
    return(
      <h1>Completaste todas las tareas</h1>
    )

  } else{
    return(
      <h1>Completadas {completed} de {total} tareas</h1>
    )}
  }

  export {TodoCounter};