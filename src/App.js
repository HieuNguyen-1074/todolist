import React ,{useState ,useEffect} from 'react'

import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist'
function App() {
  const [inputText,setInputText] = useState('');
  const [todo, setTodo] = useState([])
  const [status, setStatus] = useState('all');
  const [filterTodo , setFilterTodo] = useState([]);


  useEffect(() => {
    
    filterHal();
  },[todo,status]);
  
   const filterHal = ()=>{
     switch(status) {
       case 'completed' :
         setFilterTodo(todo.filter((item)=> item.completed === true))
         break;
         case 'uncompleted' :
         setFilterTodo(todo.filter((item)=> item.completed === false))
         break;
         default : setFilterTodo(todo);
         break;
     }
     }
   

  return (
    <div className="App">
    <header>
      <h1> Todo List</h1>
    </header>
    <Form todo= {todo} setTodo = {setTodo} inputText = {inputText} setInputText ={setInputText} setFilterTodo = {setFilterTodo}  setStatus = {setStatus}/>
    <Todolist   filterTodo= {filterTodo} todo= {todo} setTodo = {setTodo}/>
    </div>
  );
}

export default App;
