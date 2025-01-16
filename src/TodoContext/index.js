import React from "react";
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider({children}){
  const {
    item: todos,
    saveItem: saveTodos, 
    loading, 
    error,
  } = useLocalStorage('TODOS_V1', [])
  
  const [searchValue, setSearchValue] = React.useState('')
  const [ openModal,setOpenModal] = React.useState(true)

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
      console.log("Todos: " + JSON.stringify(newTodos))
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }
    const addButton = () => {
      if (openModal) {
        setOpenModal(false)
      } else {
        setOpenModal(true)
      }
    }



    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            onComplete,
            deleteTodo,
            openModal,
            setOpenModal,
            addButton
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export {TodoContext, TodoProvider}