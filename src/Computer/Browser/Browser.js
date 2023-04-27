import React, { useState } from 'react';
import Draggable from "react-draggable";
import './Browser.css';


// Drag and Drop
//  https://www.copycat.dev/blog/react-draggable/

function Browser({ z, setZ }) {
  const [index, setIndex] = useState(11);

  return (
    <Draggable 
      handle=".top-bar" 
      bounds={{left: -567, top: -103, right: 76, bottom: 21}}
      onMouseDown = {() => {setIndex(z + 1); setZ(z+1)}}>
    <div className="alfred-window" style={{zIndex: index}}>
      <div>
        <div className="top-bar"></div>
        <div className = "alfred-top-bar"> 
        <div className = "url">https://www.helloalfred.com/</div>
        </div>
        <iframe className = "browser-window" src="https://helloalfred.com/"></iframe>
      </div>
    </div>
    </Draggable>
  );
}

export default Browser;


