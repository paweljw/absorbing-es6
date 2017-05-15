/* global describe, expect, it */

const expense = { type: 'Debit', amount: '$45' }

describe('destructuring', () => {
  it('destructures', () => {
    const { type, amount } = expense
    expect(type).toBe('Debit')
    expect(amount).toBe('$45')
  })
})
