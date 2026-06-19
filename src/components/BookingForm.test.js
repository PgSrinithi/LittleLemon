import React from 'react'
import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'

test('renders booking form static elements', () => {
  render(<BookingForm availableTimes={["17:00"]} />)
  // label/input for date should be present
  const dateInput = screen.getByLabelText(/choose date/i)
  expect(dateInput).toBeInTheDocument()

  // button should be present (accessible via ARIA label)
  const submit = screen.getByRole('button', { name: /on click/i })
  expect(submit).toBeInTheDocument()
})
