import './CreateTodoButton.css'
import React from 'react';
import { TodoContext } from '../TodoContext'


function CreateTodoButton(){
    const {addButton } = React.useContext(TodoContext)
    return(
    <button className="CreateTodoButton" onClick={addButton}>+</button>
    )
}
export {CreateTodoButton};