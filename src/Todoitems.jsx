import React from 'react'
import './Todoitems.css'

const Todoitems = ({text,no,display,toggle,deleteTodo}) => {


  return (
    <div className='todoitems' >
              
           <div className='todoitems-continer' >
                  
                                        {
                        display === ""
                          ? (
                              <i
                                className="circle fa-regular fa-circle"
                                onClick={() => toggle(no)}
                              ></i>
                            )
                          : (
                              <i
                                className="circle fa-solid fa-circle-check"
                                onClick={() => toggle(no)}
                              ></i>
                            )
                      }
                  <div className='todoitems-text' 
                   style={{ textDecoration: display }}
                  >{text}</div>

           </div>

                  <i className="delete fa-solid fa-trash"
                        onClick={()=>{
                           deleteTodo(no)
                        }}
                  ></i>
    </div>
  )
}


export default Todoitems
