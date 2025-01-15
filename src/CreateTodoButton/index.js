import './CreateTodoButton.css'


function CreateTodoButton(props){
    return(
    <button className="CreateTodoButton" onClick={props.addNewTodo}>+</button>
    )
}
export {CreateTodoButton};