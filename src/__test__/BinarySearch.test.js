const { test, expect } = require('@jest/globals')
const BinarySearch = require('../BinarySearch/BinarySearch')

test('test binary search',()=>{
    const binarySearch = new BinarySearch()
    const testData = [1,4,9,4,5,6]
    expect(binarySearch.search(testData,4)).toBe(true)
})
test('test binary search with element absent',()=>{
    const binarySearch = new BinarySearch()
    const testData = [1,4,9,4,5,6]
    expect(binarySearch.search(testData,7)).toBe(false)
})