import React from 'react'


export default function RentalPeriods() {
    const rentalPeriods = [
    {abbreviation: 'Jan', full: `January ${new Date().getFullYear()}`},
    {abbreviation: 'Feb', full: `February ${new Date().getFullYear()}`},
    {abbreviation: 'Mar', full: `March ${new Date().getFullYear()}`},
    {abbreviation: 'Apr', full: `April ${new Date().getFullYear()}`},
    {abbreviation: 'May', full: `May ${new Date().getFullYear()}`},
    {abbreviation: 'Jun', full: `June ${new Date().getFullYear()}`},
    {abbreviation: 'Jul', full: `July ${new Date().getFullYear()}`},
    {abbreviation: 'Aug', full: `August ${new Date().getFullYear()}`},
    {abbreviation: 'Sep', full: `September ${new Date().getFullYear()}`},
    {abbreviation: 'Oct', full: `October ${new Date().getFullYear()}`},
    {abbreviation: 'Nov', full: `November ${new Date().getFullYear()}`},
    {abbreviation: 'Dec', full: `December ${new Date().getFullYear()}`}
    ]
  return (
    rentalPeriods.map( (period) =>
        <option value={period.abbreviation}>{period.full}</option> 
    )
  )   
}