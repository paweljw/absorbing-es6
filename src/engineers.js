const testingTeam = {
  lead: 'Jack',
  tester: 'Jill'
}

export const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Alice',
  manager: 'Bob',
  engineer: 'Eve'
}

export function * TeamIterator (team) {
  yield team.lead
  yield team.manager
  yield team.engineer

  yield * TestingTeamIterator(team.testingTeam)
}

function * TestingTeamIterator (team) {
  yield team.lead
  yield team.tester
}
