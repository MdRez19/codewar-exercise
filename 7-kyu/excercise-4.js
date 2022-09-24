// The average length

// DESCRIPTION:
// Given an array of strings of the same letter type. Return a new array,
// which will differ in that the length of each element is equal to the average length of the elements of the previous array.
//

// A few examples:
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

// If the average length is not an integer, use Math.round().
// The input array's length > 1

// 1. return a new array of giving input
// 2. get into each index and find the length
// 3. 2+1 = 3 / 2 = 1.5 = 2
// 4.

function averageLength(arrs) {
    let totalLength = 0;
    let newArrayOfList = []
    arrs.forEach(arr => {
        totalLength += arr.length
    })
   let averageLengthOfArray = Math.round(totalLength / arrs.length)
    arrs.forEach(arr => {
       let repeatLetter = repeat(arr.charAt(0), averageLengthOfArray)
        newArrayOfList.push(repeatLetter)
    })
    return newArrayOfList
}
console.log(averageLength(['aa','zzzz', 'k']))

function repeat(letter, numberOfTime) {
    let addLetter = ''
    for(let i = 0; i < numberOfTime; i++){
        addLetter += letter
    }
    return addLetter
}
