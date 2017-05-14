export function fizzBuzz (max) {
  return Array(max).fill().map((_, item) => `${(item + 1) % 3 ? '' : 'Fizz'}${(item + 1) % 5 ? '' : 'Buzz'}`)
}
