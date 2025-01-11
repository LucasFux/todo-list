import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
      <h1>Completadas {completed} de {total} tareas</h1>
    )
  }

  export {TodoCounter};