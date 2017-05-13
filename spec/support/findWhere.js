export function findWhere(array, criteria) {
  return array.find(element => {
      let property = Object.keys(criteria)[0]
      let value = criteria[property]
      return element[property] === value
  })
}
