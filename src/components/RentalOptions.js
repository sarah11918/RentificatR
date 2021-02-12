import React from 'react'

export default function RentalOptions() {
    const rentalProperties = [
    {address: '123 Main Street', renter: 'Sarah', monthlyRent: 1000 },
    {address: '456 Electric Avenue', renter: 'J.B.', monthlyRent: 950},
    {address: '789 Penny Lane', renter: 'Max', monthlyRent: 800}
    ]
  return (
    rentalProperties.map( (property) =>
        <option value={property.address}>{property.address} ({property.renter}) - ${property.monthlyRent}</option> 
    )
  )   
}