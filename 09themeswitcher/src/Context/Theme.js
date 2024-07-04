import React from "react";
import { createContext,useContext } from "react";

export const ThemeContext = createContext({
     // we can give varable and method
     themeMode:"light",
     darkTheme:()=>{},
     lightTheme:()=>{},
})

// directly use of provider
export const ThemeProvider=ThemeContext.Provider

// this is a custom hook
export default function useTheme(){
     return useContext(ThemeContext)
}

