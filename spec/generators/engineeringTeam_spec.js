/* global describe, it, expect */

import { engineeringTeam, TeamIterator } from './../../src/engineers.js'
import { prettyEngineeringTeam } from './../../src/prettyEngineers.js'

describe('enginnering team', () => {
  it('returns people', () => {
    let names = []
    for (let name of TeamIterator(engineeringTeam)) {
      names.push(name)
    }
    expect(names).toEqual(['Alice', 'Bob', 'Eve', 'Jack', 'Jill'])
  })
})

describe('pretty engineering team', () => {
  it('returns people', () => {
    let names = []
    for (let name of prettyEngineeringTeam) {
      names.push(name)
    }
    expect(names).toEqual(['Alice', 'Bob', 'Eve', 'Jack', 'Jill'])
  })
})
