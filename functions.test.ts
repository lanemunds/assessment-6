const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('test that that it returns something', () => {
        expect(shuffleArray([1,2,3,4,5])).toBeTruthy()})
   
    test('The function is returning an array of the correct length', () => {
        shuffleArray([1,2,3,4,5])
        expect(shuffleArray.length).toBe(5)})


    })