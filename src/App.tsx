// import { useState } from 'react'
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
 
import { createUser } from './Firebase/Services/AuthServices';

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

import "./App.css";
// import Home from "./Home/Home";

function App() {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    setError(null); 
    try {
      if (!url) {
        setError('Debes tomar la foto primero.');
        return;
      }
      await createUser(url);
  
      
    } catch (err) {
      setError('No se pudo registrar. Por favor inténtalo de nuevo.');  
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <header>
          <h1>camara</h1>
          {error}
          <button
                onClick={handleSubmit}
                style={{
                  borderRadius: 8,
                  margin:12,
                  border: "1px solid transparent",
                  padding: "0.6em 1.2em",
                  fontSize: "1em",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "border-color 0.25s",
                  borderColor: "#646cff",
                }}
              >
                Enviar foto
              </button>
        </header>
        {isCaptureEnable || (
          <button
            onClick={() => setCaptureEnable(true)}
            style={{
              borderRadius: 8,
              border: "1px solid transparent",
              padding: "0.6em 1.2em",
              fontSize: "1em",
              fontWeight: 500,
              fontFamily: "inherit",
              cursor: "pointer",
              transition: "border-color 0.25s",
              borderColor: "#646cff",
            }}
          >
            Iniciar
          </button>
        )}
        {isCaptureEnable && (
          <>
            <div
              
            >
               <button
                onClick={() => setCaptureEnable(false)}
                style={{
                  borderRadius: 8,
                  border: "1px solid transparent",
                  padding: "0.6em 1.2em",
                  fontSize: "1em",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "border-color 0.25s",
                  borderColor: "#646cff",
                }}
              >
                Parar
              </button>
              <button
                onClick={capture}
                style={{
                  borderRadius: 8,
                  margin:12,
                  border: "1px solid transparent",
                  padding: "0.6em 1.2em",
                  fontSize: "1em",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "border-color 0.25s",
                  borderColor: "#646cff",
                }}
              >
                Tomar foto
              </button>
              {/* <button
                onClick={() => handleSubmit}
                style={{
                  borderRadius: 8,
                  margin:12,
                  border: "1px solid transparent",
                  padding: "0.6em 1.2em",
                  fontSize: "1em",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "border-color 0.25s",
                  borderColor: "#646cff",
                }}
              >
                Enviar foto
              </button> */}
              
            </div>
            <div>
              <Webcam
                audio={false}
                width={540}
                height={360}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
          </>
        )}
        {url && (
          <>
            <div>
              <button
               style={{
                borderRadius: 8,
                margin:12,
                border: "1px solid transparent",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                fontWeight: 500,
                fontFamily: "inherit",
                cursor: "pointer",
                transition: "border-color 0.25s",
                borderColor: "#646cff",
              }}
                onClick={() => {
                  setUrl(null);
                }}
              >
                Borrar foto
              </button>
            </div>
            <div>
              <img src={url} alt="Screenshot" />
              <div>{url}</div>
            </div>
          </>
        )}
      </div>
      {/* <Home/> */}
    </>
  );
}

export default App;
