import React from 'react'


export default function RentalOptions() {
    const rentalProperties = [
    {address: '423 Water', renter: 'Sarah', montlyRent: 1000 },
    {address: '26 Gertrude', renter: 'J.B.', monthlyRent: 950},
    {address: '591 Sheppard', renter: 'Max', montlyRent: 800}
    ]
  return (
    rentalProperties.map( (property) =>
        <option value={property.address}>{property.address} - {property.renter}</option> 
    )
  )   
}