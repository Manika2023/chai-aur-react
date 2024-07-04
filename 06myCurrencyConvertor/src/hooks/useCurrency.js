import { useEffect,useState } from "react";

// custom hook
// when any body use this hook and reload the page then it call 
function useCurrencyInfo(currency){
     const [data,setData]=useState({})
     useEffect(()=>{
          fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
          // data convert into json
          .then((res)=> res.json())
          // it will return json data and setData will hold the data
          .then((res)=> setData(res[currency]))
          console.log(data);
     },[currency])
    console.log(data);
     return data
}
// not to set data => return the data

// it will return the method

export default useCurrencyInfo