import React, { useState } from 'react';
import './Computer.css';
import Webcam from 'react-webcam';
import Browser from './Browser/Browser'
import Terminal from './Terminal/Terminal'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import virtual from './virtual.mp3'
import Draggable from "react-draggable";


// Webcam: https://www.npmjs.com/package/react-webcam
// Audio player: https://www.npmjs.com/package/react-h5-audio-player
// Music: https://www.youtube.com/watch?v=sx0PerbW_EE
function Computer() {
  const [z, setZ] = useState(10);
  const [index, setIndex] = useState(10);

  return (
    <div>
        <div className="computer">
            <div className = "screen">
              <div>
                <Draggable
                handle=".audio" 
                bounds={{left: -503, top: -28, right: 372, bottom: 565}}
                onMouseDown = {() => {setIndex(z + 1); setZ(z+1)}}>
                <div className="audio" style={{zIndex: index}}>
                  <div className="top-bar" id="audio-top-bar"/>
                  <div>
                    <audio
                      className="player"
                      controls
                      src={virtual}>
                    </audio>
                  </div>
              </div>
              </Draggable>
                <Webcam 
                    className="webcam"
                    audio={false}
                    mirrored
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                />
                <Terminal z= {z} setZ = {setZ}/>
                <Browser z= {z} setZ = {setZ}/>
              </div>
            </div>
        </div>
        <div className="stand"></div>
    </div>
  );
}

export default Computer;


