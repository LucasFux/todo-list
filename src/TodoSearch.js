import React from 'react'
import './TodoSearch.css'


function TodoSearch({searchValue, setSearchValue}){

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