export function findWhere (array, criteria) {
  return array.find(element => {
    let property = Object.keys(criteria)[0]
    let value = criteria[property]
    return element[property] === value
  })
}

// Supports a whole hash map of criteria
export function betterFindWhere (array, criteria) {
  let criteriaArray = hashToArray(criteria)
  return array.find(element => {
    return criteriaArray.every(criterion => {
      let property = criterion[0]
      let value = criterion[1]
      return element[property] === value
    })
  })
}

// Converts {one: 'two'} to [['one', 'two']]
function hashToArray (hash) {
  let keys = Object.keys(hash)
  return keys.map(key => {
    return [key, hash[key]]
  })
}
