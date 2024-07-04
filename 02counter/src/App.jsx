import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 0=>counter 1=>function
  // 0 1 are index
 let [counter, setCounter]= useState(15)
  // let counter=5
  const addValue = ()=>{
  console.log("clicked", counter);
  // counter=counter+1
// prevcounter=> last  updated state => give  existing  state
// counter =>using batches then use last update (see there is same task)(useState=> send update in batches)
setCounter(counter+1) 
setCounter(counter+1)
// setCounter(prevCounter => prevCounter+1)
// setCounter(Counter => Counter+1)
// setCounter(prevCounter => prevCounter+1)

  }

  const removeValue=()=>{
    if(counter > 0){
      let value= setCounter(counter-1)
    }
  }


  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>Add Value: {counter}</button><br/>
     <button onClick={removeValue}>remove Value: {counter}</button>
    </>
  )
}

export default App
