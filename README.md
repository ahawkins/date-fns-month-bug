# date-fns isLastDayOfMonth Bug

This repo contains a test demonstrating a bug in `isLastDayOfMonth`.
The bug occurs when the Date is created from `Date.UTC`.

## How to use

```
$ npm install
$ npm test
```

## Output

The `console.log` output shows the `Date` under test, the `endOfDay`,
and `endOfMOnth` values used internally in `isLastDayOfMonth`.

```
 FAIL  ./bug.test.js
  isLastDayOfMonth bug
    ✕ date created from UTC (3 ms)
      console.log
        2023-06-30T00:00:00.000Z 2023-06-30T09:59:59.999Z 2023-07-01T09:59:59.999Z
    ✓ date created in local time
      console.log
        2023-06-30T10:00:00.000Z 2023-07-01T09:59:59.999Z 2023-07-01T09:59:59.999Z

  ● isLastDayOfMonth bug › date created from UTC

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

       8 |     console.log(date, endOfDay(date), endOfMonth(date))
       9 |
    > 10 |     expect(isLastDayOfMonth(date)).toBe(true)
         |                                    ^
      11 |   })
      12 |
      13 |   test('date created in local time', () => {

      at Object.toBe (bug.test.js:10:36)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.186 s, estimated 1 s
Ran all test suites related to changed files.
```
