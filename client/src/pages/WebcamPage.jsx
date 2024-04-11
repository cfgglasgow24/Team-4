import React, { useRef, useState, useEffect } from 'react';

import { FilesetResolver, GestureRecognizer, HandLandmarker } from "@mediapipe/tasks-vision";
import hand_landmarker_task from "../models/hand_landmarker.task";
import gesture_recognizer_task from "../models/gesture_recognizer.task";

const WebcamPage = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [handPresence, setHandPresence] = useState(null);

  useEffect(() => {
    let handLandmarker;
    let gestureRecognizer;
    let animationFrameId;

    const initializeHandDetection = async () => {
        try {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
            );
            handLandmarker = await HandLandmarker.createFromOptions(
                vision, {
                    baseOptions: { modelAssetPath: hand_landmarker_task },
                    numHands: 2,
                    runningMode: "video"
                }
            );
            gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
                baseOptions: { 
                    modelAssetPath: gesture_recognizer_task,
                    delegate: "GPU" 
                },
                numHands: 2,
                runningMode: "video",
            });
            detectHands();
        } catch (error) {
            console.error("Error initializing hand detection:", error);
        }
    };

    const drawLandmarks = (landmarksArray) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
  
      landmarksArray.forEach(landmarks => {
          landmarks.forEach(landmark => {
              const x = landmark.x * canvas.width;
              const y = landmark.y * canvas.height;
  
              ctx.beginPath();
              ctx.arc(x, y, 5, 0, 2 * Math.PI); // Draw a circle for each landmark
              ctx.fill();
          });
      });
  };

  const detectHands = () => {
      if (videoRef.current && videoRef.current.readyState >= 2) {
          const detections = handLandmarker.detectForVideo(videoRef.current, performance.now());
          const result = gestureRecognizer.recognizeForVideo(videoRef.current, performance.now());
          setHandPresence(detections.handednesses.length > 0);

          // Assuming detections.landmarks is an array of landmark objects
          if (detections.landmarks) {

            

            // const GE = new fp.GestureEstimator([
            //     fp.Gestures.ThumbsUpGesture,
            // ]);

            //   const gesture = GE.estimate(detections.landmarks, 4);
            //   if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                drawLandmarks(detections.landmarks);
            //   }
          }

          if (result.gestures.length > 0) {
            console.log(result.gestures[0][0].score, " name: ", result.gestures[0][0].categoryName);
          }

      }
      requestAnimationFrame(detectHands);
  };

  const startWebcam = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        await initializeHandDetection();
    } catch (error) {
        console.error("Error accessing webcam:", error);
    }
};

startWebcam();

return () => {
    if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    if (handLandmarker) {
        handLandmarker.close();
    }
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
};
}, []);

  console.log("Starting...");

    return (
      <>
        <h1>Camera Test</h1>
        <div className="gesture" style={{ position: "relative" }}>
          <video ref={videoRef} autoPlay playsInline/>
          <canvas ref={canvasRef} style={{backgroundColor: "#111111"}}/>
        </div>
        <p>
          Gestures
        </p>
      </>
    )
  }
  
  export default WebcamPage
  