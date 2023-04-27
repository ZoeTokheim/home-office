// Creating react app: https://create-react-app.dev/

// import TimeBasedText from "./Home/TimeBasedText"
import './App.css';
import React, { useState } from 'react';
import Computer from "./Computer/Computer";
import Window from "./Window/Window";
import plant from './plant.png';

function App() {
  // const [showModal, setShowModal] = useState(true);
  // const [entries, setEntries] = useState(
  //   JSON.parse(localStorage.getItem('entries')) || []
  // );
  const [entry, setEntry] = useState(["", -1]);
  // const [name, setName] = useState(
  //   JSON.parse(localStorage.getItem('name')) || ""
  // );
  // const [tempName, setTempName] = useState(name);

  return (
    <div className="App">
        <Computer/>
        <Window/>
        <img className="plant" src={plant}/> 
    </div>
  );
}

export default App;
