export function unique (array) {
  return array.reduce((accumulator, element) => {
    if (!accumulator.find(accumulatorElement => { return accumulatorElement === element })) {
      accumulator.push(element)
    }
    return accumulator
  }, [])
}
