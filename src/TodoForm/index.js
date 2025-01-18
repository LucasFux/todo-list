import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event)=> {
        event.preventDefault()
        setOpenModal(false)
        addTodo(newTodoValue)
    }

    const onCancel =(event)=> {
        setOpenModal(false)
    }
    
    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }


    return(
        <form onSubmit={onSubmit}>
            <label>Escribí tu nuevo ToDo</label>
            <textarea
            placeholder="Todo Default."
            value={newTodoValue}
            onChange={onChange}/>
            <div className="TodoFormButtonsContainer">
                <button type="button" className="TodoFormCancelButton" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoFormAddButton">Añadir</button>
            </div>
        </form>
    )
}
export {TodoForm}