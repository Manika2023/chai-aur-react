import { useState } from "react";
import { useCallback ,useEffect,useRef} from "react";
import "./App.css";
// useEffect is a React Hook that lets you synchronize a component with an external system.
// uaeEffect => jab bhi load hota hai to first time call hota hai => jab bhi dependencies change hoga to again reload hoga
// Call useCallback at the top level of your component to cache a function definition between re-renders:
// useCallback => memoise the maximum part of function => to optimize it is used
// useRef is used to take the reference
function App() {
  // this hook its default value is 8
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef=useRef(null)

  // function and dependencies=> which are changing and causing of page reloading
  // in this case with variable setPAssword function is also changing
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtjklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      // str.lenght =>  number start with a digit like we used *10 so we can place a number in left
      // +1 minimum number will be 1
      // it returning index number
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass);
    }
   
    setPassword(pass);
    // setPassword is given as dependencies because it is for optimization=> password can also replace setPassword
    // memmoisation is using=> sare dependencies ko cache me rakho
  }, [length, numberAllowed, charAllowed, setPassword]);

// function to copy the password

const copyPasswordToClipboard=useCallback(()=>{
  // use of passwordRef=> to optimize => we can also change ui
  // initial value might be 0 so ? (optional select is used)
  passwordRef.current?.select()
  passwordRef.current?.setSelectRange(0,length)
  window.navigator.clipboard.writeText(password)
},
[password])

  // passwordGenerator()=> can not call this method like in this way => handling by react
  // callback and dependencies => depending on which variable and method
useEffect(() => {
passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          {/* we are adding props in input */}
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shadow-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                // setCharacterAllowed(true)=> it will not change
                // previous value is changing by !prev
                // we have access of previous value => refer 02Counter
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
