import React from 'react'

// 1-USerContext
// 2-UserContextProvider
// 3-Login.jsx
// 4 -Profile.jsx

// creating global context
// Context => each context is a provider=> like a global variable
// iske aaandar jitne bhi componenets hai sabko UserContext ka access mil jayega
// par1=> const UserContext=React.createContext()
// export default UserContext

const UserContext=React.createContext()

export default UserContext;

