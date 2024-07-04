import React from "react";
import UserContext from "./UserContext";

// children is like a outlet
// jo bhi props aata as it is use kar = named children
const UserContextProvider=({children})=>{
     const [user,setUser]=React.useState(null)
          return(
               <>
               <UserContext.Provider value={{user,setUser}}>
               {children}
               </UserContext.Provider>
               </>
          )
}

export default UserContextProvider