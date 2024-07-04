import React, {useEffect } from 'react'
import { useState } from 'react';
import {useLoaderData} from 'react-router-dom'

function Github() {
const data= useLoaderData()

     // data return by loaderData
//      const [data,setData]=useState([])
//      useEffect(()=>{
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(response => response.json())
// .then(data => {
//      console.log(data);
//      setData(data)
// })
//      },[])
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.followers}
      <img className='flex justify-center items-center' src={data.avatar_url} alt="git picture" height="330px" width="330px" />
      </div>
    </>
  )
}

export default Github


// loader => useEffect se pahle data fetch kar lega => optimization
// asyn call
export const githubInfoLoader = async()=>{
 const response= await fetch("https://api.github.com/users/hiteshchoudhary")
 return response.json()
}