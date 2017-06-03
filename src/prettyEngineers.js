const testingTeam = {
  lead: 'Jack',
  tester: 'Jill',
  [Symbol.iterator]: function * () {
    yield this.lead
    yield this.tester
  }
}

export const prettyEngineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Alice',
  manager: 'Bob',
  engineer: 'Eve',
  [Symbol.iterator]: function * () {
    yield this.lead
    yield this.manager
    yield this.engineer

    yield * this.testingTeam
  }
}
