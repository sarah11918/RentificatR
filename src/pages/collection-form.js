import React, {useState} from 'react';
import RentalOptions from "../components/RentalOptions";
import RentalPeriods from "../components/RentalPeriods";
import UserContext from '../context/user.js';


export default function CollectionForm () {

  const rentalProperties = [
    {address: '123 Main Street', renter: 'Sarah', monthlyRent: 1000 },
    {address: '456 Electric Avenue', renter: 'J.B.', monthlyRent: 950},
    {address: '789 Penny Lane', renter: 'Max', monthlyRent: 800}
    ]

  const [property, setProperty] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [period, setPeriod] = useState('(month)')
  const [comments, setComments] = useState('')

  const updateProperty = (event) => {
    setProperty(event.target.value)
  }

  const updateAmount = (event) => {
    setAmount(event.target.value)
  }

   const updateDate = (event) => {
    setDate(event.target.value)
  }

  const updatePeriod = (event) => {
    setPeriod(event.target.value)
  }

  const updateComments = (event) => {
    setComments(event.target.value)
  }

  return (

    <div className="App">
    
      <h1>RentificatR</h1>
      
      <form style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="photo" className="cameraButton">Take a photo
          <input type="file" id="photo" accept="image/*;capture=camera" />
        </label>
        
        <label htmlFor="property">Rental Property</label>
        <select id="property" onChange={updateProperty}>
          <option value="">--Choose a rental property--</option>
          <RentalOptions />
        </select>
        <button className="quick-button">QUICK FILL</button>
        <br />
        
        <label htmlFor="paymentAmount">Amount Collected</label>
        <input type="number" id="paymentAmount" value={amount} onChange={updateAmount} />
        <br />
        
        <label htmlFor="dateCollected">Date Collected</label>
        <input type ="date" id="dateCollected" value={date} onChange={updateDate} />
        <button className="date-button">Today</button>
        <button className="date-button">Yesterday</button>

        <br />
        
        <label htmlFor="rentalPeriod">Rental Period</label>
        <select id="rentalPeriod" value={period} onChange={updatePeriod}>
          <option value=''>--Choose a month--</option>
          <RentalPeriods />
        </select>
          <button className="period-button">This Month</button>
        <br />
        
        <label htmlFor="additionalComments">Additional Comments</label>
        <textarea id="additionalComments" value={comments} onChange={updateComments}/>
        <br />
        <button>Submit</button>
      </form>
      <h2>Summary:</h2>
      <p>{property}</p>
      <p>${amount} for {period} rent on {date}</p>
      <p>{comments}</p>
    
    </div>
  )
}