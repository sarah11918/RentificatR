import React from 'react';
import './App.css';

function App() {
  const propertyAddresses = [
    {address: '423 Water', renter: 'Sarah', montlyRent: 1000 },
    {address: '26 Gertrude', renter: 'J.B.', monthlyRent: 950},
    {address: '591 Sheppard', renter: 'Max', montlyRent: 800}
    ]

  return (
    <div className="App">
      <header className="App-header">
      <h1>RentificatR</h1>
      <form style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="photo" className="cameraButton">Take a photo
          <input type="file" id="photo" accept="image/*;capture=camera" />
        </label>
        
        <label htmlFor="property">Rental Property</label>
        <select id="property">
          <option value="">--Choose a rental property--</option>
          <option value="dog">{propertyAddresses[0].address} - {propertyAddresses[0].renter}</option>
          <option value="cat">{propertyAddresses[1].address} - {propertyAddresses[1].renter}</option>
          <option value="hamster">{propertyAddresses[2].address} - {propertyAddresses[2].renter}</option>
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
          <option value='Jan'>January</option>
          <option value='Feb'>February</option>
          <option value='Mar'>March</option>
          <option value='Apr'>April</option>
          <option value='May'>May</option>
          <option value='Jun'>June</option>
          <option value='Jul'>July</option>
          <option value='Aug'>August</option>
          <option value='Sep'>September</option>
          <option value='Oct'>October</option>
          <option value='Nov'>November</option>
          <option value='Dec'>December</option>
        </select>
        <br />
        <label htmlFor="additionalComments">Additional Comments</label>
        <textarea id="additionalComments" />
        <br />
        <button>Submit</button>
      </form>




      </header>
    </div>
  );
}

export default App;
