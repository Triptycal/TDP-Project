import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CreatePet from './components/CreatePet.jsx';
import EditPet from './components/EditPet.jsx';
import ListPet from './components/ListPet.jsx';
import DeletePet from './components/DeletePet.jsx';
import PetCard from './components/PetCard.jsx';
import logo from "./logo.png";

function App() {
  return (
      <Router>
          <div className="container">
          
          <div className="row">
            <div className="col">
                <img src={logo} width="100" height="100" alt="some cute pets" />
            </div>
            <div className="col">
                <Link to="/">My list</Link>
            </div>
            <div className="col">
                <Link to="/CreatePet">Add a pet</Link>
            </div>
          </div>
            <header className="App-header">
          </header>
              <Routes>
                <Route path="/" element={<ListPet />} />
                <Route path="/Thistle" element={<ListPet name={'Thistle'} species={'Dog'} breed={'MBT'} age={'1'} />} />
                <Route path="/CreatePet" element={<CreatePet/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;

    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       header
    //     </p>
    //   </header>
    //   <div className="Create-pet" >
    //   style={{ height: 350, width: 350 }}>
    //     <h1>Create pet</h1>
    //     <PetForm/>
    //   </div>
    //   <div className="Display-pets">
    //     <h1>Display pets</h1>
    //     <Pet name={'Thistle'} species={'Dog'} breed={'MBT'} age={'1'} />
    //   </div>
      
    // </div>
