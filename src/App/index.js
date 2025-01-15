import React from 'react';
//import './App.css';
import { TodoCounter } from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

/* 
 const defaultTodos = [
  {text: 'abc', completed: false},
  {text: 'xyz', completed: true},
  {text: 'bot', completed: true},
  {text: 'XYZ', completed: true}
]
*/


function App() {
  

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => !!todo.completed).length

  const searchedTodos = todos.filter((todo) => {
    const textTodo = todo.text.toLocaleLowerCase()
    const textSearch = searchValue.toLocaleLowerCase() 
    return textTodo.includes(textSearch)})



    const onComplete = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
      console.log("Todos: " + newTodos)
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }

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
          onDelete={()=>deleteTodo(todo.text)}
          />
          
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment >
  );
}
export default App;
