import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
// import { Todoprovider } from './contexts'
// import './App.css'

function App() {
  // todos is array of todo
 const [todos,setTodos]=useState([])

 const addTodo=(todo)=>{
  // because todo hold three properties
    setTodos((prev)=> [{id:Date.now(),...todo},...prev])
 }
 const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
 }

//  it include those todo which match this id
 const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=> todo.id != id) )
 }

 const toggleComplete=(id)=>{
  // prevTodo contains
  // id:1,
  // todo:"todo msg",
  // completed:false,
    setTodos((prev) => prev.map((prevTodo)=> prevTodo === id ? {...prevTodo,completed: ! prevTodo.completed}: prevTodo))
 }

 useEffect(()=>{
  
 },[])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                     {/*Loop and Add TodoItem here */}
                        
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
