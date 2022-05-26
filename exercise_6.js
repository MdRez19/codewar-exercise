/*
Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/


// version:1
function squareDigits(num){
    let result = Number(num.toString().split('').map(value => value * value).join(''))
 return result;
}

 console.log(squareDigits(9119))



// version: 2

function squareDigits(num){
    let result = num.toString().split('')
    let squareTheString;
    let joinTheString = ''
    for(let i = 0; i < result.length; i++){
        squareTheString = result[i] * result[i]
        joinTheString += squareTheString.toString()
    }

    return Number(joinTheString);
}

console.log(typeof squareDigits(9119))