import { useState,useEffect } from 'react'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'


function App() {
  const [todos, setTodos] = useState([])

//  todo is value
 const addTodo=(todo)=>{
  console.log(todo);
  // setTodos(todo)
  // access of old value
  // using of spread operator => destructuring
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
 }


//  todo is single here
 const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))

 }



const deleteTodo=(id)=>{
  setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
}

const toggleComplete=(id)=>{
  setTodos((prev)=>
     prev.map((prevTodo)=>
       prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo))
}

useEffect(()=>{
  // returning string
  // localStorage.getItem("todos")
  // return javascript
  // this is because we are giving array not string
  const todos=JSON.parse(localStorage.getItem("todos"))
  console.log("getitem",todos);
  // todos=> array ke aandar object
  if(todos && todos.length > 0){
    setTodos(todos)
  }

},[])

useEffect(()=>{
const t= localStorage.setItem("todos",JSON.stringify(todos))
console.log("set item",t);
},[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo,toggleComplete}}>
    <h1 className='bg-orange-500 p-4 text-5xl'>hello world</h1>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                     {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
  
    )
}

export default App
