/* global describe, it, expect */

function withDefault (arg = 'DEF') {
  return arg
}

describe('default function arguments', () => {
  it('returns the default when none given', () => expect(withDefault()).toBe('DEF'))
  it('returns the default when undefined given', () => expect(withDefault(undefined)).toBe('DEF'))
  it('returns null when null given', () => expect(withDefault(null)).toBeNull())
  it('returns the given', () => expect(withDefault('ASD')).toBe('ASD'))
})
