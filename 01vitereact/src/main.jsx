import React from 'react'
import ReactDOM from 'react-dom/client'
// from here =>evaluated expression , jsx se bhi kar sakte hai instead of createElement
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'
function MyApp(){
return(
  <div>
    <h2>this is my custom App!</h2>
  </div>
)
}
function MyApp2(){
return(
  <div>
    <h2>this is my custom App!</h2>
  </div>
)
}
// this above function convert into props after parsing

// const ReactElement={
//   // a is tag of html
//   type:"a",
//   props:{
//        href:"https://google.com",
//        target:'_blank'
//   },
//   children:"click me to visit google"
// }

// according to react


const anotherElement=(
  <h2><a href='https://google.com' target='_blank'>Visit google</a></h2> 
)
const anotherUser="chai aur react"
const reactElement=React.createElement(
  'a',
  {'href':'https://google.com', target:'_blank'},'click me to visit google',
  anotherUser
  // not use without evaluated expression because (if(true)=> not use in object like this )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  //   {/* <App /> */}
  //  <MyApp/>
  // </>
  // MyApp()

  // give error because ReactElemetn is a object
  // <ReactElement/>
  // give error because this is not custom render
  // ReactElement

  // the definition of anotherElement is expecting by built in render
  // anotherElement

  reactElement

  // <App/>
  
)
