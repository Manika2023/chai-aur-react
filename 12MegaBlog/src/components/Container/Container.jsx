import React from 'react'

// accept property as a children
export default function Container({children}) {
  return 
    <div className='w-full max-w-7xl mx-auto px-4 '>
      {children}
    </div>;
  
}
