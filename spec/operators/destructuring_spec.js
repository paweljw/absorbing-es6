/* global describe, expect, it */

const expense = { type: 'Debit', amount: '$45' }

function expenseSentence ({ type, amount }) {
  return `Expense of ${amount} to ${type}`
}

const color = { color: 'red' }

function expenseSentenceWithColor ({ type, amount }, { color }) {
  return `Expense of ${amount} to ${type}, color ${color}`
}

const companies = [ 'Facebook', 'Google', 'Uber' ]

describe('destructuring', () => {
  it('destructures an object', () => {
    const { type, amount } = expense
    expect(type).toBe('Debit')
    expect(amount).toBe('$45')
  })

  it('destructures function arguments', () => expect(expenseSentence(expense)).toBe('Expense of $45 to Debit'))
  it('destructures function arguments fancily', () => {
    expect(expenseSentenceWithColor(expense, color)).toBe('Expense of $45 to Debit, color red')
  })
  it('destructures companies off of array', () => {
    const [ name, name2, name3 ] = companies
    expect(name).toBe('Facebook')
    expect(name2).toBe('Google')
    expect(name3).toBe('Uber')
  })

  it('destructures companies with rest', () => {
    const [ name, ...rest ] = companies
    expect(name).toBe('Facebook')
    expect(rest).toEqual(['Google', 'Uber'])
  })
})
