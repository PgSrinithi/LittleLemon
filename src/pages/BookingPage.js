import React from 'react'
import BookingForm from '../components/BookingForm'

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <section style={{padding:24}}>
      <h1>Reserve a table</h1>
      <p>Please fill out the form below to reserve a table.</p>

      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />

      <aside style={{marginTop:24}}>
        <h2>Policies</h2>
        <p>Reservations are held for 15 minutes past the booked time.</p>
      </aside>
    </section>
  )
}

export default BookingPage
