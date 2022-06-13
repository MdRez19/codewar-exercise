// Sum of differences in array
/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

    Example
    [2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
 */

function sumOfDifferences(arr) {
    if(arr.length === 0) return 0
    let total = 0;
    arr.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    let sortReverse = arr.reverse()
    for(let i = 0; i < sortReverse.length; i++){
        // 0-1, 1-2, 2-3
            let subNumber = sortReverse[i] - sortReverse[i + 1]
        if(i !== (sortReverse.length - 1)){
            total += subNumber
        }
    }
    return total;
}
console.log(sumOfDifferences([2, 1, 10]))

// let numbers = [5, 2, 2, 25, 15, 12 ];
// numbers.sort((a,b) => {
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
//
// console.log(numbers.reverse());