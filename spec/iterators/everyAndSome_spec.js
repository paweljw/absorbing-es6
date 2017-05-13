/* global describe, it, expect */

import { reduceEvery } from './../../src/reduceEvery'
import { reduceSome } from './../../src/reduceSome'

const computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 16}
]

const TO_RUN_PROGRAM = 16

describe('every', () => {
  it('checks whether all computers can run program', () => {
    const allComputersCanRunProgram = computers.every(computer => { return computer.ram > TO_RUN_PROGRAM })
    expect(allComputersCanRunProgram).toBeFalsy()
  })
})

describe('some', () => {
  it('checks whether any computers can run program', () => {
    const anyComputersCanRunProgram = computers.some(computer => { return computer.ram > TO_RUN_PROGRAM })
    expect(anyComputersCanRunProgram).toBeTruthy()
  })
})

describe('reduceEvery', () => {
  it('checks whether all computers can run program', () => {
    const allComputersCanRunProgram = reduceEvery(computers, computer => { return computer.ram > TO_RUN_PROGRAM })
    expect(allComputersCanRunProgram).toBeFalsy()
  })
})

describe('reduceSome', () => {
  it('checks whether any computers can run program', () => {
    const anyComputersCanRunProgram = reduceSome(computers, computer => { return computer.ram > TO_RUN_PROGRAM })
    expect(anyComputersCanRunProgram).toBeTruthy()
  })
})
