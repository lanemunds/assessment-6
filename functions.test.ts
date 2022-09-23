const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('test that that it returns the same items', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        let myVar = true
        for(let i= 0; i > result.length; i++){
            if (arr.includes(result[i])=== false){
                myVar= false 
                return
            }
        }
        expect(myVar).toBe(true)})
   
    test('The function is returning an array of the correct length', () => {
       let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr.length).toBe(result.length)})


    })