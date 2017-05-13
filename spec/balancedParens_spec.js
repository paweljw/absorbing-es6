/* global describe, it, expect */

import { balancedParens } from './../src/balancedParens'

describe('balancedParens', () => {
  it('says () is balanced', () => expect(balancedParens('()')).toBeTruthy())
  it('says ()()() is balanced', () => expect(balancedParens('()()()')).toBeTruthy())
  it('says ((())) is balanced', () => expect(balancedParens('((()))')).toBeTruthy())
  it('says ((()) is unbalanced', () => expect(balancedParens('((())')).toBeFalsy())
  it('says )( is unbalanced', () => expect(balancedParens(')(')).toBeFalsy())
  it('says ((one(two))) is balanced', () => expect(balancedParens('((one(two)))')).toBeTruthy())
})
