import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

// function App() {
//   const [themeMode,setThemeMode]=useState("light")

//   // lightTheme => name should be the same
//   const lightTheme=()=>{
//     setThemeMode("light")
//   }
//   const darkTheme=()=>{
//     setThemeMode("dark")
//   }

//   // actual change in theme
//    useEffect(()=>{
//     document.querySelector('html').classList.remove("light","dark")
//     document.querySelector('html').classList.add(themeMode)
//    },[themeMode])
//   return (
//     <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//            <ThemeBtn/>
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             {/* card */}
//             <Card/>
//             </div>
//         </div>
//       </div>

//     </ThemeProvider>
//   );
// }

// export default App;

function App() {
  const [NewthemeMode, setThemeMode] = useState("light");

const lightTheme=()=>{
  setThemeMode("light")
}
const darkTheme=()=>{
  setThemeMode("dark")
}

// actual change in theme
useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(NewthemeMode)
},[NewthemeMode])

  return (

    <>
    <ThemeProvider value={{NewthemeMode,lightTheme,darkTheme}}>
      <h1 className="p-4 bg-pink-500 text-white">Monika</h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
            
    </ThemeProvider>
    </>
  );
}

export default App;
