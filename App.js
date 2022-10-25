import React from "react";
import './App.css';
import AddPet from './AddPet';

function App() {
  return (
    <div className="App">
      <div id="header">
        <header className="App-header">
          <h1>My Pets!</h1>
        </header>
      </div>
      <div id="createPet">
      <AddPet/>
      </div>
      
      <div id="myPets"></div>
      
      
     
    </div>
  );
}

export default App;
