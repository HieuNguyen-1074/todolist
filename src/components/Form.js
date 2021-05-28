import React from 'react'

import Todolist from './Todolist'

const Form = (props) => {
  const {setInputText,setTodo,todo, inputText ,setStatus} = props
    const inputTextHandle = (e) =>{
        setInputText(e.target.value);
    }
    const submitHandle = (e)=>{       
        e.preventDefault();
        setTodo([...todo, {text : inputText , completed : false , id : Math.random()}])
        setInputText('')
    }
   const filterH  = (e)=>{
       setStatus(e.target.value)
   }
    return (
        <form  >
        <input type="text" onChange={inputTextHandle} className="todo-input" value = {inputText}/>
        <button className="todo-button" type="submit" onClick = {submitHandle}>
          <i className="fas fa-plus-square"> </i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange = {filterH}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}


export default Form
