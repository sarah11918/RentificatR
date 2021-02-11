import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>RentificatR</h1>
          <label htmlFor="photo" className="cameraButton">Take a photo
            <input type="file" id="photo" accept="image/*;capture=camera" />
          </label>
      </header>
    </div>
  );
}

export default App;
