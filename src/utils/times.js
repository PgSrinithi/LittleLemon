// Helper functions for available booking times
export const initializeTimes = () => {
  try {
    if (typeof fetchAPI === 'function') {
      // use today's date if no date provided
      const today = new Date().toISOString().split('T')[0]
      return window.fetchAPI(today)
    }
  } catch (e) {
    // fallthrough to static fallback
  }
  return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30']
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'date':
      try {
        if (typeof fetchAPI === 'function') {
          return window.fetchAPI(action.date)
        }
      } catch (e) {
        // fallthrough
      }
      return initializeTimes(action.date)
    default:
      return state
  }
}
