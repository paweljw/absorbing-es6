export function reject (array, iteratorFunction) {
  return array.filter(element => { return !iteratorFunction(element) })
}

export function reduceReject (array, iteratorFunction) {
  return array.reduce((accumulator, element) => {
    if (!iteratorFunction(element)) {
      accumulator.push(element)
    }

    return accumulator
  }, [])
}
