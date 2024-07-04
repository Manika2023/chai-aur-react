import { useState } from 'react'
// import './App.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [feet,setFeet]=useState('')
  const[inches,setInches]=useState("")
  const [bmi,setBmi] = useState(null)
  const [bmimessage,setMessage]= useState("")

const calculateBMI=(e)=>{
  e.preventDefault()
  if (weight && feet && inches){
    const heightInCm=(parseInt(feet)* 30.48)+ (parseInt(inches)* 2.54)
    console.log(heightInCm);
    const heightInMeters = heightInCm / 100;
    console.log(heightInMeters);
    const bmiValue=(weight / (heightInMeters * heightInMeters)).toFixed(2)
    console.log(bmiValue);
    setBmi(bmiValue)

    let message=""
    if (bmiValue < 18.5) message="underweight"
    else if (bmiValue >= 18.5 && bmiValue< 24.5)  message="normal weight"
    else if (bmiValue >= 25 && bmiValue < 29.5)  message="overweight"
    else message="obesity"

    setMessage(message)
  }
}

  return (
    <>
    <div className="flex justify-start h-screen gap-4">
    <div className="bg-pink-500 w-1/2"></div>
      <div className="w-1/2 p-4 flex flex-col ">
       <h1 className="bg-blue-500 px-2 py-4 text-white mb-4 rounded">CALCULATE YOUR BMI</h1>
        <form action=""
        onSubmit={calculateBMI}
        >
          <div className="mb-4">
              <label htmlFor="">weight (kg) :</label>
              <input type="number"
              value={weight}
              onChange={(e)=> setWeight (e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
               />
          </div>
          <div className="mb-4">
          <div className="text-pink-500 p-3">Height: </div>
            <label htmlFor=""> Enter Feet :</label>
            <input type="number"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
             />
          </div>

          <div className="mb-4">
           
            <label htmlFor="">Enter inches:</label>
            <input type="number"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
             />
          </div>

          <div className="mb-4">
            <button
            type='submit'
            className='bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
            >
              Calculate
            </button>
          </div>

        </form>
        {bmi && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <p>Your BMI is : <span className='font-bold'>{bmi}</span></p>
            <p>You are : <span className='font-bold text-pink-500'>{bmimessage}</span></p>
          </div>
        )}
      </div>
    </div>
     
    </>
  )
}

export default App
