import React, {useState} from 'react';
import Header from '../components/header';
import RentalOptions from "../components/RentalOptions";
import RentalPeriods from "../components/RentalPeriods";
//import Emoji from 'a11y-react-emoji';
// import UserContext from '../context/user.js';


export default function CollectionForm () {

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

    <div className="w-3/4 max-w-screen-md mx-auto">
      <Header />
      <h1 className="text-2xl font-bold mb-2">Rent Collection</h1>
    
      <form className="flex flex-col mx-auto">
        <label htmlFor="photo" className="cameraButton"><span aria-hidden="true" role="img">📷</span> photo of the cheque <span aria-hidden="true" role="img">📷</span>
          <input  type="file" id="photo" accept="image/*;capture=camera" />
        </label>
        
        <label className="mt-4 mb-2" htmlFor="property">Rental Property</label>
        <select  id="property" onChange={updateProperty}>
          <option className="italic" value="" >-- Select a  property --</option>
          <RentalOptions />
        </select>


        <button className="bg-blue-200 rounded w-3/4 mx-auto mt-3 text-blue-800 text-sm font-bold py-1 mt-10">QUICK FILL</button>
        <br />
        
     
        <label htmlFor="paymentAmount">Amount Collected</label>
        <div className="flex">
        <p className="mr-2">$</p>
        <input className="border w-full" type="number" id="paymentAmount" value={amount} onChange={updateAmount} />
        </div>
  
        <br />
        
        <label htmlFor="dateCollected">Date Collected</label>
        
        <input className="border" type = "date" id="dateCollected" value={date} onChange={updateDate} />
        <button className="bg-gray-300 border rounded px-3 py-1 mt-2 ">Today</button>
        <button className="bg-gray-300 border rounded px-3 py-1 mt-2">Yesterday</button>

        <br />
        
        <label htmlFor="rentalPeriod">Rental Period</label>
        <select id="rentalPeriod" value={period} onChange={updatePeriod}>
          <option value=''>--Choose a month--</option>
          <RentalPeriods />
        </select>
          <button className="bg-gray-300 border rounded px-3 py-1 mt-2">This Month</button>
        <br />
        
        <label htmlFor="additionalComments">Additional Comments</label>
        <textarea className="border" id="additionalComments" value={comments} onChange={updateComments}/>
      
        <button className="bg-blue-400 rounded w-3/4 mx-auto mt-3 text-white text-sm font-bold py-1">Submit</button>
      </form>
  
      <h2>Summary:</h2>
      <p>{property}</p>
      <p>${amount} for {period} rent on {date}</p>
      <p>{comments}</p>
    
    </div>
  )
}