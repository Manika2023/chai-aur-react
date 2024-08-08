import React from 'react'

export default function Button({
     // it can be btnText
     children,
     type='button',
     bgColor='bg-blue-600',
     textColor="text-white",
     className="",
     // remaining property
     ...props
}) {
  return (
  <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} {...props}`}>
     {children}
  </button>
  )
}
