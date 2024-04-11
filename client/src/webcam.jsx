import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function WebcamPage() {
    const webcam = useRef(null);
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <h1>Camera Test</h1>
        <Webcam 
        ref={webcam}
        />
        <p>
          Gestures
        </p>
      </>
    )
  }
  
  export default WebcamPage
  