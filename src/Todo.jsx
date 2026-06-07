import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import TodoItems from './Todoitems.jsx'


let count = 0;

const Todo = () => {
   
  const [todos,setTodos] = useState([]);
  const inputRef = useRef(null); 
  const [loaded, setLoaded] = useState(false); 

 
useEffect(() => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    setTodos(JSON.parse(savedTodos));
  }
  setLoaded(true); 
}, []);


useEffect(() => {
  if (!loaded) return; 
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos, loaded]);

  const add = function(){
     if (inputRef.current.value.trim() === "") return;
     setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
     inputRef.current.value = "";
  }

  const toggle = (no)=>{
      setTodos(
         todos.map((todo)=>{
                    
               if(todo.no === no){
                      
                      return{ ...todo,
                               display: todo.display === ""
                                        ? "line-through"
                                        : ""
                      }
                         
               }
               
               return todo;

         })
      )
  }


  const deleteTodo = (no) => {

   setTodos(
      todos.filter((todo) => {
         return todo.no !== no;
      })
   );

}
   
  return (
    <div className='todo' >

             <h1 className='todoheader'>To-Do List</h1>
             <div className='todoadd' >
                         
                        <input ref={inputRef} className='todoinput' type="text" placeholder='Add Your Task'/>
                        <button onClick={()=>{add()}} className='todobtn' >Add</button>

             </div>
             <div className='todolist' >
              {
                        todos.map((item, index) => {
                                   return (
                                     <TodoItems
                                       key={index}
                                       text={item.text}
                                       no={item.no}
                                       display={item.display}
                                       toggle={toggle}
                                       deleteTodo={deleteTodo}
                                     />
                                   )
                                 })     
              }                            
             </div>

    </div>
  )
}

export default Todo
