import React from 'react'


const Todo = props => {
    const {text, td, setTodo ,todo } = props
    const deleteTodo = () =>{
        setTodo(todo.filter((item)=>{
            return item.id !== td.id
        }))
    }
    const doneTodo = () =>{
        setTodo(todo.map((item)=>{
            if(item.id  === td.id ){
            console.log(item)
            return {...item , completed  :  !item.completed}
            }
            else{
                return item;
            }
        }))
    }
    return (
        <div className = 'todo'>
    <li className= {` todo-item ${td.completed ? "completed" : ''} `} >{text}</li>
            <button  className= "complete-btn" onClick = {doneTodo}> <i className= "fas fa-check"> </i></button>
            <button className = 'trash-btn' onClick = {deleteTodo}><i  className = "fas fa-trash"> </i></button>
        </div>
    )
}



export default Todo
