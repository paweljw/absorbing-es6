/* global describe, it, expect */

import { Toyota } from '../src/Toyota'

const toyota = new Toyota('Prius', '1991', '15mpg')

describe('Toyota', () => {
  it('drives', () => expect(toyota.drive()).toBe('vrooom'))
  it('honks', () => expect(toyota.honk()).toBe('beep'))
  it('has a mileage', () => expect(toyota.mileage).toBe('15mpg'))
  it('has a year', () => expect(toyota.year).toBe('1991'))
  it('has a model', () => expect(toyota.model).toBe('Prius'))
})
