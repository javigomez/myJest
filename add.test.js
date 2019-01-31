const sum = (a, b) => a + b

test('1 + 1 is 2', async () => {
  expect(sum(1, 1)).toBe(2)
})

test('1 + 1 is 11', async () => {
  expect(sum(1, 1)).toBe('hello')
})

test('1 + 1 is not 3', async () => {
  expect(sum(1, 1)).notToBe(3)
})
