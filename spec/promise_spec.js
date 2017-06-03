/* global describe, it, expect */

describe('promises', () => {
  it('resolves', () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('veryFancy'), 1000)
    }).then((thing) => {
      expect(thing).toBe('veryFancy')
    })
  })

  it('rejects', () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('veryFancy')), 1000)
    }).catch((thing) => {
      expect(thing).toEqual(Error('veryFancy'))
    })
  })
})
