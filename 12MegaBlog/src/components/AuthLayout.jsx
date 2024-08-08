import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Protected({children,authentication=true}) {
const navigate=useNavigate()
const [loader,setLoader] = useState()
const authStatus=useSelector(state => state.auth.status)

useEffect(()=>{
     // TODO  make it easy

     // if(authStatus === true){
     //      navigate("/")
     // }
     // else if(authStatus === false){
     //      navigate("/login")
     // }

// let authValue=authStatus === true ? true : false

     // true && false !== true ==> true then login 
     // user is sign up
     if(authentication && authStatus !== authentication){
          navigate("/login")
     }
     // false && true !== true
     // false && false
     else if(!authentication && authStatus !== authentication){
          navigate("/")
     }
     setLoader(false)
},[setLoader,navigate,authentication])

  return  loader ? <h1>Loading...</h1> : <h2>{children}</h2>
  
}

export default Protected

