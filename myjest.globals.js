function expect (actual) {
  return {
    toBe: expected => {
      if (actual != expected) {
        throw new Error(`${actual} is not equal ${expected}`)
      }
      return actual == expected
    },
    notToBe: expected => {
      if (actual === expected) {
        throw new Error(`${actual} is equal ${expected}`)
      }
      return actual != expected
    }
  }
}

async function test (title, callback) {
  try {
    await callback()
    console.log(`✓ ${title}`)
  } catch {
    console.error(`✕ ${title}`)
  }
}

global.test = test
global.expect = expect
