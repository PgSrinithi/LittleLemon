import React, { useState, useEffect } from 'react'

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState(availableTimes.length ? availableTimes[0] : '')
  useEffect(() => {
    setTime(availableTimes.length ? availableTimes[0] : '')
  }, [availableTimes])
  const [guests, setGuests] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { date, time, guests, name, email }
    const doSubmit = async () => {
      setSubmitting(true)
      try {
        let ok = false
        if (typeof submitForm === 'function') {
          ok = await submitForm(payload)
        } else if (typeof submitAPI === 'function') {
          ok = await submitAPI(payload)
        } else {
          ok = true
        }

        if (ok) setSubmissionStatus('success')
        else setSubmissionStatus('error')
      } catch (err) {
        setSubmissionStatus('error')
      } finally {
        setSubmitting(false)
      }
    }

    doSubmit()
  }


  return (
    <form className="booking-form" onSubmit={handleSubmit} style={{maxWidth:480}}>
      <div style={{marginBottom:12}}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
            if (dispatch) dispatch({ type: 'date', date: e.target.value })
          }}
          required
        />
      </div>

      <div style={{marginBottom:12}}>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
        </select>
      </div>

      <div style={{marginBottom:12}}>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />
      </div>

      <div style={{marginBottom:12}}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div style={{marginBottom:12}}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Make Reservation'}</button>
      </div>

      {submissionStatus === 'success' && (
        <div style={{color: 'green', marginTop:12}}>Reservation submitted successfully.</div>
      )}
      {submissionStatus === 'error' && (
        <div style={{color: 'red', marginTop:12}}>Failed to submit reservation. Please try again.</div>
      )}
    </form>
  )
}

export default BookingForm
