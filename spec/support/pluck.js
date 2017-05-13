export function pluck (array, property) {
  return array.map(element => { return element[property] })
}

export function reducePluck (array, property) {
  return array.reduce((accumulator, element) => {
    accumulator.push(element[property])
    return accumulator
  }, [])
}
