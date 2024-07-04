import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import  { githubInfoLoader } from './components/Github/Github.jsx'
import Github from './components/Github/Github.jsx'

// path element and children

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact-us",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    // outlet of header and footer
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact-us' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User />}></Route>
      {/* <Route path='github' element={<Github />}></Route> */}
      <Route
      // loader={()=>{
        
      // }}
      loader={githubInfoLoader}
       path='github' 
       element={<Github />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
