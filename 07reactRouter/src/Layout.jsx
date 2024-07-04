import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

// connected to main.jsx

export default function Layout() {
  return (
    <>
     <Header/>
     {/* this is dynamic */}
     <Outlet/>
     <Footer/>
    </>
  )
}
