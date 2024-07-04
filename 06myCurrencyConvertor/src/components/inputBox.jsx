import React,{useId} from "react";

// useId is a React hook for generating unique ids that can be passes to accessiblity attribute
// function  of a=input Box and its parameters when we will use(function call or use componenets)
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // return unque value in number not to key
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
        // use in lable and input to bind
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            // onAmountChange is exist and 2nd is function
            // onAmountChange(Number(e.target.value) => this canbe also done but it will crash
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          
          name={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* loop to make options for currency */}
          {/* jab bhi loops use karte hain jsx ke aandar to key pass karna chahiye */}
          {/*  */}
          {currencyOptions.map((currency) => (
            <option
    
             key={currency} value={currency}>

              {currency}

            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;