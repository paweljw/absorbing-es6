export function expenseSentenceWithColor ({ type, amount }, { color }) {
  return `Expense of ${amount} to ${type}, color ${color}`
}

export function expenseSentence ({ type, amount }) {
  return `Expense of ${amount} to ${type}`
}
