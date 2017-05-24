/* global describe, expect, it */

import { expenseSentence, expenseSentenceWithColor } from '../../src/expenses'

describe('destructuring', () => {
  const expense = { type: 'Debit', amount: '$45' }

  it('destructures an object', () => {
    const { type, amount } = expense
    expect(type).toBe('Debit')
    expect(amount).toBe('$45')
  })

  it('destructures function arguments', () => expect(expenseSentence(expense)).toBe('Expense of $45 to Debit'))

  const color = { color: 'red' }

  it('destructures function arguments fancily', () => {
    expect(expenseSentenceWithColor(expense, color)).toBe('Expense of $45 to Debit, color red')
  })

  const companies = [ 'Facebook', 'Google', 'Uber' ]

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

  const betterCompanies = [
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Google', location: 'Mountain View' }
  ]

  it('destructures both ways at the same time', () => {
    const [{ location }] = betterCompanies
    expect(location).toBe('Menlo Park')
  })

  const Google = {
    locations: [ 'Mountain View', 'London' ]
  }

  it('destructures both ways at the same time the other way around', () => {
    const { locations: [ location ] } = Google
    expect(location).toBe('Mountain View')
  })
})
