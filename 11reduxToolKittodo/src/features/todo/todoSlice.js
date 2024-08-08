import { createSlice,nanoid } from "@reduxjs/toolkit";

// initial State of store
const initialState={
     // initial State will be a array
     todos:[
          {id:1,text:"hello world"}
     ]
}

function sayHello(){
console.log("hello world");
}

// slice = version of reducers=> functionality
export const todoSlice=createSlice({
     name:'todo',
     initialState,
     // it conttains properties and functions
     reducers:{
          // addTodo:sayHello
          addTodo:(state,action)=>{
               const todo ={
                    // id:Date.now()
                    id:nanoid(),
                    // for different text => send => payload is a object
                    text:action.payload
               }
               // state.todoss=> current state of todos
               state.todos.push(todo)
          },
          // action is data
          removeTodo:(state,action)=>{
               state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
          },
          // make update
          updateTodo: (state, action) => {
               // take id and text from action.payload
               const { id, text } = action.payload;
               const existingTodo = state.todos.find((todo) => todo.id === id);
               if (existingTodo) {
                   existingTodo.text = text;
               }
           }
     }
})

// export each reducer of stores
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer


// import {createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//     todos: [{id: 1, text: "Hello world"}]
// }



// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             const todo = {
//                 id: nanoid(), 
//                 text: action.payload
//             }
//             state.todos.push(todo)
//         },
//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload )
//         },
//     }
// })

// export const {addTodo, removeTodo} = todoSlice.actions

// export default todoSlice.reducer