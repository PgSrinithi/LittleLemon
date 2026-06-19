import { initializeTimes, updateTimes } from './utils/times'

test('initializeTimes returns expected times array (uses fetchAPI)', () => {
  const mock = ['10:00', '11:00', '12:00']
  global.fetchAPI = jest.fn(() => mock)
  const times = initializeTimes()
  expect(fetchAPI).toHaveBeenCalled()
  expect(times).toEqual(mock)
  delete global.fetchAPI
})

test('updateTimes returns state when action not recognized', () => {
  const state = ['a', 'b']
  const next = updateTimes(state, { type: 'unknown' })
  expect(next).toBe(state)
})

test('updateTimes handles date action by calling fetchAPI with date', () => {
  const mock = ['15:00', '15:30']
  global.fetchAPI = jest.fn(() => mock)
  const next = updateTimes([], { type: 'date', date: '2026-06-19' })
  expect(fetchAPI).toHaveBeenCalledWith('2026-06-19')
  expect(next).toEqual(mock)
  delete global.fetchAPI
})
