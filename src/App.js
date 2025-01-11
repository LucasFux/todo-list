import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter.js';
import {TodoSearch} from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import {CreateTodoButton} from './CreateTodoButton.js'


const defaultTodos = [
  {text: 'abc', completed: false},
  {text: 'xyz', completed: false},
  {text: 'terminar curso', completed: true},
  {text: 'terminar bot', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment >
  );
}
export default App;
