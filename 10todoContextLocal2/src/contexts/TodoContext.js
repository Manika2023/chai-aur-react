import { createContext,useContext } from "react";

export  const TodoContext=createContext({
     // property of todo
     todos:[
          {
               // properties of one todo
               id:1,
               todo:"todo msg",
               completed:false,
          }
     ],
     // function of todo app
     addTodo:(todo)=>{},
     updateTodo:(id,todo)=>{},
     deleteTodo:(id)=>{},
     toggleComplete:(id)=>{}

})



// custom hooks
export const useTodo=()=>{
     return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider