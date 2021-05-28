import React  from 'react'
import Todo from "./Todo"

const Todolist = props => {
    const {todo ,setTodo ,setFilterTodo ,filterTodo} = props 
    console.log(todo)
    return (
       <div className="todo-container">
         <ul className="todo-list">
          {
        filterTodo.map((td) =>{
               
            return <Todo  text= {td.text} key={td.id} td = {td} todo = {todo} setTodo = {setTodo}/>
         })
        }

         </ul>
       </div>
    )
}


export default Todolist
