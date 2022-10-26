import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import CreatePet from './components/CreatePet.jsx';
import EditPet from './components/EditPet.jsx';
import ListPet from './components/ListPet.jsx';
import DeletePet from './components/DeletePet.jsx';

function App() {
  return (
      <Router>
          <div>
          <header className="App-header">
              <ul>
                  <li>
                      <Link to="/">My list</Link>
                  </li>
                  <li>
                      <Link to="/CreatePet">Add a pet</Link>
                  </li>
              </ul>
          </header>
              <Routes>
                <Route path="/" element={<ListPet/>} />
                <Route path="/CreatePet" element={<CreatePet/>} />
                <Route path="/DeletePet" element={<DeletePet/>} />
                <Route path="/EditPet" element={<EditPet/>} />
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
