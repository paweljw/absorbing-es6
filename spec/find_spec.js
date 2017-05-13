/* global describe, it, expect */

let users = [
  {name: 'Jill', id: 1},
  {name: 'Alex', id: 2},
  {name: 'Jack', id: 3},
  {name: 'Alex', id: 4}
]

describe('find', () => {
  it('finds Alex', () => {
    let alex = users.find(user => { return user.name === 'Alex' })
    expect(alex.id).toBe(2)
  })
})
