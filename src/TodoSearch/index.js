import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'


function TodoSearch(){
    const {searchValue,setSearchValue } = React.useContext(TodoContext)

    return (
        <div id='searchDiv'>
        
        <input 
            placeholder="Buscar tarea"
            className='TodoSearch'
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value)

            }} 
        />

        </div>
    )
}

export {TodoSearch};