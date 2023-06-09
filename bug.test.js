const { endOfMonth, endOfDay, isLastDayOfMonth } = require('date-fns')

describe('isLastDayOfMonth bug', () => {
  test('date created from UTC', () => {
    const date = new Date(Date.UTC(2023, 5, 30))

    // Log internal comparision methods
    console.log(date, endOfDay(date), endOfMonth(date))

    expect(isLastDayOfMonth(date)).toBe(true)
  })

  test('date created in local time', () => {
    const date = new Date(2023, 5, 30)

    // Log internal comparision methods
    console.log(date, endOfDay(date), endOfMonth(date))

    expect(isLastDayOfMonth(date)).toBe(true)
  })
})
