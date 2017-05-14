/* global describe, it, expect */

import { fizzBuzz } from '../src/fizzBuzz'

describe('fizzBuzz', () => {
  it('fizzes', () => expect(fizzBuzz(5)).toEqual([ '', '', 'Fizz', '', 'Buzz' ]))
  it('buzzes', () => expect(fizzBuzz(15)).toEqual([ '', '', 'Fizz', '', 'Buzz', 'Fizz', '', '', 'Fizz', 'Buzz', '', 'Fizz', '', '', 'FizzBuzz' ]))
})
