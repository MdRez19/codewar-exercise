/*

Find Multiples of a Number

DESCRIPTION:
In this simple exercise, you will build a program that takes a value, integer ,
and returns a list of its multiples up to another value, limit . If limit is a multiple of integer,
it should be included as well. There will only ever be positive integers passed into the function,
not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 5),
the function should return [2, 4] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
 */

// 2 * 1 = 2
// 2 * 2 = 4




// build a function
// function take a value
// integer
// 10
// 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
// 2, 4



function findMultiples(integer, limit) {
    //your code here
    let result = []
    let i = 1;
    while (integer * i <= limit){
        result.push(integer * i)
        i += 1
    }
    return result
}

console.log(findMultiples(5, 25))












