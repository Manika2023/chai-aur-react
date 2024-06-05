import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 let myObj={
  // username:"monika",
  age:21
 }
 let newArr=[1,2,3]
  return (
    <>
     <h1 className='bg-orange-600 p-4 rounded-xl border border-spacing-2'>tailwind css</h1>
     <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-44 h-44 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2024/05/30/10/36/bird-8798292_640.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-le space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
{/* <Card channel="topper classes" someObj={myObj} username="monika" />
<Card channel="topper classes" ArrObj={newArr} /> */}

<Card username="kunila" btnText="click me" />
<Card username="monika"/>
<Card username="Aakash"  btnText="" />
    </>
  )
}

export default App
