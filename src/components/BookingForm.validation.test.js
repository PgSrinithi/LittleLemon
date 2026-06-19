import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import BookingForm from './BookingForm'

// helper to format today's date as yyyy-mm-dd
const todayStr = () => new Date().toISOString().split('T')[0]

test('HTML5 attributes are present on form fields', () => {
  render(<BookingForm availableTimes={["17:00"]} />)

  const dateInput = screen.getByLabelText(/choose date/i)
  expect(dateInput).toHaveAttribute('type', 'date')
  expect(dateInput).toHaveAttribute('min', todayStr())

  const guests = screen.getByLabelText(/number of guests/i)
  expect(guests).toHaveAttribute('type', 'number')
  expect(guests).toHaveAttribute('min', '1')
  expect(guests).toHaveAttribute('max', '10')

  const name = screen.getByLabelText(/your name/i)
  expect(name).toHaveAttribute('required')

  const email = screen.getByLabelText(/email/i)
  expect(email).toHaveAttribute('type', 'email')
  expect(email).toHaveAttribute('required')
})

test('submit button disabled when form invalid and enabled when valid', async () => {
  render(<BookingForm availableTimes={["17:00"]} />)

  const submit = screen.getByRole('button', { name: /on click/i })
  // initially invalid -> disabled
  expect(submit).toBeDisabled()

  const dateInput = screen.getByLabelText(/choose date/i)
  const name = screen.getByLabelText(/your name/i)
  const email = screen.getByLabelText(/email/i)
  const guests = screen.getByLabelText(/number of guests/i)
  const time = screen.getByLabelText(/choose time/i)

  // fill valid values
  fireEvent.change(dateInput, { target: { value: todayStr() } })
  fireEvent.change(name, { target: { value: 'Test User' } })
  fireEvent.change(email, { target: { value: 'test@example.com' } })
  fireEvent.change(guests, { target: { value: '3' } })
  fireEvent.change(time, { target: { value: '17:00' } })

  // wait for validity effect to update
  await waitFor(() => expect(submit).not.toBeDisabled())
})

test('past date sets custom validity and keeps submit disabled', async () => {
  render(<BookingForm availableTimes={["17:00"]} />)

  const submit = screen.getByRole('button', { name: /on click/i })
  const dateInput = screen.getByLabelText(/choose date/i)
  const name = screen.getByLabelText(/your name/i)
  const email = screen.getByLabelText(/email/i)
  const guests = screen.getByLabelText(/number of guests/i)
  const time = screen.getByLabelText(/choose time/i)

  // set a past date (yesterday)
  const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0]
  fireEvent.change(dateInput, { target: { value: yesterday } })
  fireEvent.change(name, { target: { value: 'Test' } })
  fireEvent.change(email, { target: { value: 'a@b.com' } })
  fireEvent.change(guests, { target: { value: '2' } })
  fireEvent.change(time, { target: { value: '17:00' } })

  // custom validity should prevent enabling
  await waitFor(() => expect(submit).toBeDisabled())
})
