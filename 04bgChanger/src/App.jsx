import { useState } from "react"

function App() {
  // color is var and setColor is function
  const [color,setColor] = useState("olive")
// use onclick because => onclick only wants function ont its return value instead of it we can use {setColor("orange")}
// {setColor("orange")}=> but this is not good practice
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-9 px-2">
      <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-md">
        <button onClick={() => setColor("red")} className="outline-none px-6 py-2 rounded-full text-black shadow-lg" style={{background:"red"}}>Red</button><br/>
        <button onClick={() => setColor("white")} className="outline-none px-6 py-2 rounded-full text-black shadow-lg  border-2 border-red-600"  style={{background:"white"}}>white</button><br/>
        <button onClick={() => setColor("green")} className="outline-none px-6 py-2 rounded-full text-black shadow-lg" style={{background:"green"}}>green</button><br/>
        <button onClick={() => setColor("orange")} className="outline-none px-6 py-2 rounded-full text-black shadow-lg" style={{background:"orange"}}>orange</button><br/>
        <button onClick={() => setColor("blue")} className="outline-none px-6 py-2 rounded-full text-white shadow-lg" style={{background:"blue"}}>Blue</button><br/>
        <button onClick={() => setColor("black")} className="outline-none px-6 py-2 rounded-full text-white shadow-lg" style={{background:"black"}}>Black</button><br/>
      </div>
    
     </div>
     </div>
    </>
  )
}

export default App
