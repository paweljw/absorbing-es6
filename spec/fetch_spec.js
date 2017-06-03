/* global describe, it, expect, fetch */

describe('fetch', () => {
  it('fetches', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
      expect(data.ok).toEqual(true)
    })
  })
})
