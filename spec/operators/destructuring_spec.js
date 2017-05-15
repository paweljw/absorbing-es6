/* global describe, expect, it */

const expense = { type: 'Debit', amount: '$45' }

function expenseSentence ({ type, amount }) {
  return `Expense of ${amount} to ${type}`
}

describe('destructuring', () => {
  it('destructures', () => {
    const { type, amount } = expense
    expect(type).toBe('Debit')
    expect(amount).toBe('$45')
  })

  it('destructures function arguments', () => expect(expenseSentence(expense)).toBe('Expense of $45 to Debit'))
})
