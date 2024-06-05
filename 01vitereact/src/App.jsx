// app ia a function

import Chai from "./chai";
function App() {
  const username="monika"
  return (
    <>
    {/* {}=> this is evaluated expression=> js ka final output jo evaluate ho gaya hai (not us if(true))*/}
      <h1>Chai aur react with vite - {username}</h1>
      <Chai />
      
    </>
  );
}

export default App;
