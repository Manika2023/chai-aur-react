import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    const [todo,setTodo]=useState("")
//     extract value from useTodo
    const {addTodo}=useTodo()

    const add=(e)=>{
     e.preventDefault()
     // if todo is empty
     if(!todo) return
     // array ke aandar object hai
     // addTodo({id:Date.now(),todo:todo,completed:false})=>todo:todo=> is same
     addTodo({todo,completed:false})
     setTodo("")
    }
     return (
         <form onSubmit={add} className="flex">
             <input
                 type="text"
                 value={todo}   
                 onChange={(e)=> setTodo(e.target.value)}
                 placeholder="Write Todo..."
                 className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
             />
             <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                 Add
             </button>
         </form>
     );
 }
 
 export default TodoForm;
 
 
