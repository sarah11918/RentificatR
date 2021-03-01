import React from 'react'

export default function Summary({property, amount, period, date, comments}){
  return(
    <div>
      <h2>Summary:</h2>
      <p>{property}</p>
      <p>${amount} for {period} rent on {date}</p>
      <p>{comments}</p>
    </div>
  )
}