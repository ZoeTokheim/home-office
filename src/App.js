// Creating react app: https://create-react-app.dev/

import './App.css';
import React, { useState } from 'react';
import Computer from "./Computer/Computer";
import Window from "./Window/Window";
import plant from './plant.png';

function App() {
  return (
    <div className="App">
        <Computer/>
        <Window/>
        <img className="plant" src={plant}/> 
    </div>
  );
}

export default App;
