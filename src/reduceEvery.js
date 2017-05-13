export function reduceEvery (array, iteratorFunction) {
  return array.reduce((accumulator, element) => {
    return accumulator && iteratorFunction(element)
  }, true)
}
