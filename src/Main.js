import React, { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import BookingPage from './pages/BookingPage'
import ConfirmedBooking from './pages/ConfirmedBooking'
import { initializeTimes, updateTimes } from './utils/times'

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], () => initializeTimes())
  const navigate = useNavigate()

  const submitForm = async (formData) => {
    try {
      if (typeof submitAPI === 'function') {
        const ok = await window.submitAPI(formData)
        if (ok) {
          navigate('/booking/confirmed')
          return true
        }
        return false
      }
      // fallback: navigate to confirmed for demo purposes
      navigate('/booking/confirmed')
      return true
    } catch (e) {
      return false
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/booking/confirmed" element={<ConfirmedBooking/>} />
      </Routes>
    </main>
  )
}

export default Main
