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
  {text: 'bot', completed: true},
  {text: 'XYZ', completed: true}
]

function App() {
 const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  console.log('tenemos: ' + todos)

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => !!todo.completed).length

  const searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <React.Fragment>
      <TodoCounter
        setTodos = {setTodos}
        completed={completedTodos}
        total={totalTodos} />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
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
