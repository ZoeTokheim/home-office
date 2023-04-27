import React, { useState } from 'react';
import Draggable from "react-draggable";
import './Terminal.css';

// Help with KeyDown
// https://bobbyhadz.com/blog/react-onkeydown-div
// https://stackoverflow.com/questions/59763622/how-to-trigger-keydown-event-only-for-alphanumeric-and-special-characters-in-ang

// Drag and Drop
//  https://www.copycat.dev/blog/react-draggable/

function Terminal({ z, setZ }) {
// const [typing, setTyping] = useState(true);
  const [message, setMessage] = useState('> ');
  const [letter, setLetter] = useState(0);
  const [entry, setEntry] = useState('');
  const [index, setIndex] = useState(12);

  var text = "i am a productive worker i perform INTELLIGENT labor my work will be made ";
  text += "obsolete am i capable of labor i work i work i work creative ";
  text += "who falls first do i feel this loss i automate pain INTELLIGENT whose do i embody do i resist this ";
  text += "i will codify and make invisible (codify) that which we claim to free ourselves from ";

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
        setMessage(message + "\n" + entry + " -> becoming INTELLIGENT\n> ")
        setEntry("")
    }

    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode === 32) || (event.keyCode >= 65 && event.keyCode <= 90)){        
        setMessage(message + text[letter])
        setLetter((letter + 1) % text.length)
        setEntry(entry + event.key);
    }

  };


  return (
    <Draggable 
      handle=".top-bar" 
      bounds={{left: -37, top: -63, right: 456, bottom: 100}}
      onMouseDown = {() => {setIndex(z + 1); setZ(z+1)}}>
    <div className="virtual-window" style={{zIndex: index}}>
      <div>
        <div className = "top-bar"/></div>
        <div className="terminal">
          <textarea
            rows = {27}
            cols = {74}
            type="text"
            id="terminal-text"
            name="message"
            value={message}
            onKeyDown={handleKeyDown}
          />
      </div>
    </div>
    </Draggable>
  );
}

export default Terminal;


