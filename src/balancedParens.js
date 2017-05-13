// Rules:
// * a balanced expression is one which has the same number of open and close parens
// ** e.g. "((()))" //=> balanced
// ** e.g. "()()()" //=> balanced
// ** e.g. "((())" //=> unbalanced
// * exception: if at any time during processing the string there are more closed parens than opens, string is unbalanced
// ** e.g. ")(" //=> unbalanced

export function balancedParens (string) {
  return string.split('').reduce((accumulator, character) => {
    if (accumulator < 0) { return accumulator }
    if (character === '(') {
      return accumulator + 1
    } else if (character === ')') {
      return accumulator - 1
    } else { return -1 }
  }, 0) === 0
}
