export function pluck (array, property) {
  return array.map(element => element[property])
}

export function reducePluck (array, property) {
  return array.reduce((accumulator, element) => {
    accumulator.push(element[property])
    return accumulator
  }, [])
}
