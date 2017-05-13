export function pluck (array, property) {
  return array.map(element => { return element[property] })
}
