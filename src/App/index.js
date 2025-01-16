import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


/* 
 const defaultTodos = [
  {text: 'abc', completed: false},
  {text: 'xyz', completed: true},
  {text: 'bot', completed: true},
  {text: 'XYZ', completed: true}
]
strengifiedTodos = JSON.strignify(defaultTodos)
localStorage.setItem("TODOS_V1", JSON.strignify(defaultTodos))
*/

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  )
}
export default App;
