import React from 'react'


export default function RentalPeriods() {
    const rentalPeriods = [
    {abbreviation: 'Jan', full: 'January'},
    {abbreviation: 'Feb', full: 'February'},
    {abbreviation: 'Mar', full: 'March'},
    {abbreviation: 'Apr', full: 'April'},
    {abbreviation: 'May', full: 'May'},
    {abbreviation: 'Jun', full: 'June'},
    {abbreviation: 'Jul', full: 'July'},
    {abbreviation: 'Aug', full: 'August'},
    {abbreviation: 'Sep', full: 'September'},
    {abbreviation: 'Oct', full: 'October'},
    {abbreviation: 'Nov', full: 'November'},
    {abbreviation: 'Dec', full: 'December'}
    ]
  return (
    rentalPeriods.map( (period) =>
        <option value={period.abbreviation}>{period.full}</option> 
    )
  )   
}