import React from 'react';
import './App.css';
import RentalOptions from "./components/RentalOptions"
import RentalPeriods from "./components/RentalPeriods"

function App() {

  return (
    <div className="App">
    
      <h1>RentificatR</h1>
      
      <form style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="photo" className="cameraButton">Take a photo
          <input type="file" id="photo" accept="image/*;capture=camera" />
        </label>
        
        <label htmlFor="property">Rental Property</label>
        <select id="property">
          <option value="">--Choose a rental property--</option>
          <RentalOptions />
        </select>
        <br />
        
        <label htmlFor="paymentAmount">Amount Collected</label>
        <input type="number" id="paymentAmount"  />
        <br />
        
        <label htmlFor="dateCollected">Date Collected</label>
        <input type ="date" id="dateCollected" />
        <br />
        
        <label htmlFor="rentalPeriod">Rental Period</label>
        <select id="rentalPeriod">
          <option value=''>--Choose a month--</option>
          <RentalPeriods />
        </select>
        <br />
        
        <label htmlFor="additionalComments">Additional Comments</label>
        <textarea id="additionalComments" />
        <br />
        <button>Submit</button>
      </form>
    
    </div>
  );
}

export default App;
