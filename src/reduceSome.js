export function reduceSome (array, iteratorFunction) {
  return array.reduce((accumulator, element) => {
    return accumulator || iteratorFunction(element)
  }, true)
}
