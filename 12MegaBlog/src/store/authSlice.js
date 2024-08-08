import { createSlice } from "@reduxjs/toolkit";

const initialState={
     // status --> user is authenticated or not
     status:false,
     userData:null
}

const authSlice=createSlice({
     name:"auth",
     initialState,
     reducers:{ 
          // individual functions--dispatch methods
          // action give payload 
          // state - jo bhi values update karni hai
          login:(state,action)=>{
               state.status=true
               state.userData=action.payload.userData;
          },
          logout:(state,action)=>{
               state.status=false,
               state.userData=null
          }
     }
})

// actions is method of reducers
export const {login,logout}=authSlice.actions;
export default authSlice.reducer

