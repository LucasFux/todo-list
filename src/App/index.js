import React from 'react';
import { AppUI } from './AppUI';
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
    const textTodo = todo.text.toLowerCase()
    const textSearch = searchValue.toLowerCase() 
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

    const addNewTodo = () => {
      console.log("Boton funciona + ")
    }

  return (
    <AppUI 
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    onComplete = {onComplete}
    deleteTodo = {deleteTodo}
    addNewTodo = {addNewTodo}
    />
  )
}
export default App;
