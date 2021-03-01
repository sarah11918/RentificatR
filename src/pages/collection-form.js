import React, {useState} from 'react';
import Header from '../components/header';
import RentalOptions from "../components/RentalOptions";
//import RentalPeriods from "../components/RentalPeriods";
//import Summary from "../components/summary"
import Modal from "../components/modal"
//import Emoji from 'a11y-react-emoji';
// import UserContext from '../context/user.js';


export default function CollectionForm () {
  
  const [property, setProperty] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [period, setPeriod] = useState('(month)')
  const [comments, setComments] = useState('')
  const [month, setMonth] = useState('')

  const updateProperty = (event) => {
    setProperty(event.target.value)
  }

  const updateAmount = (event) => {
    setAmount(event.target.value)
  }

   const updateDate = (event) => {
    setDate(event.target.value)
  }

  const updateDateToToday = (event) => {
    event.preventDefault()
    setDate(new Date().toISOString().slice(0, 10))
  }

   const updateDateToYesterday = (event) => {
    event.preventDefault()
    setDate(new Date(Date.now() - 864e5).toISOString().slice(0, 10))
  }

  const updatePeriod = (event) => {
    setPeriod(event.target.value);
  }

  const updatePeriodToCurrentMonth = (event) => {
    event.preventDefault();
    // const rentMonth = new Date().toLocaleString("default", {month: "long"});
    // const rentYear = new Date().getFullYear();
    setPeriod(new Date().toISOString().slice(0, 7))
    setMonth(new Date().toLocaleString('default', { month: 'long' }))
  }

  const quickFill = (event) => {
    event.preventDefault();
    setDate(new Date().toISOString().slice(0, 10));
    setMonth(new Date().toLocaleString('default', { month: 'long' }))
    setPeriod(new Date().toISOString().slice(0, 7))
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


        <button className="bg-blue-200 rounded w-3/4 mx-auto mt-3 text-blue-800 text-sm font-bold py-1 mt-10" onClick={quickFill}>THIS MONTH'S FULL RENT PAID TODAY</button>
        <br />
        
     
        <label htmlFor="paymentAmount">Amount Collected</label>
        <div className="flex">
        <p className="mr-2">$</p>
        <input className="border w-full" type="number" id="paymentAmount" value={amount} onChange={updateAmount} />
        </div>
  
        <br />
        
        <label htmlFor="dateCollected">Date Collected</label>
        
        <input className="border" type = "date" id="dateCollected" value={date} onChange={updateDate} />
        <button className="bg-gray-300 border rounded px-3 py-1 mt-2 " onClick={updateDateToToday}>Today</button>
        <button className="bg-gray-300 border rounded px-3 py-1 mt-2" onClick={updateDateToYesterday}>Yesterday</button>

        <br />
        
        <label htmlFor="rentalPeriod">Rental Period</label>
        <input type="month" id="rentalMonth" name="start"
       min="2021-01" value={period} onChange={updatePeriod} />

          <button className="bg-gray-300 border rounded px-3 py-1 mt-2" onClick={updatePeriodToCurrentMonth}>This Month</button>
        <br />
        
        <label htmlFor="additionalComments">Additional Comments</label>
        <textarea className="border" id="additionalComments" value={comments} onChange={updateComments}/>

        <Modal
        title="Transaction Summary"
        cancelButtonText="Cancel"
        actionButtonText="Submit"
        buttonText="View Summary"
        property = {property}
        amount = {amount}
        period = {period}
        month = {month}
        date = {date}
        comments = {comments} 
      />
      </form>
    </div>
  )
}

//   <Summary 
    //     property = {property}
    //     amount = {amount}
    //     period = {period}
    //     date = {date}
    //     comments = {comments} />
     