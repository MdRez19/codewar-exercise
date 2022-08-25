/*
Merge two sorted arrays into one
DESCRIPTION:
    You are given two sorted arrays that both only contain integers.
    Your task is to find a way to merge them into a single one, sorted in asc order.
    Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

    You don't need to worry about validation,
    since arr1 and arr2 must be arrays with 0 or more Integers.
    If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders.
Also, arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!

 */


function mergeArrays(arr1, arr2) {
    let mergeIntoOne = []
    let filterArr;
    for (let i = 0; i < arr1.length; i++){
        mergeIntoOne.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++){
        mergeIntoOne.push(arr2[i])
    }
    mergeIntoOne.sort((a, b) => {
        return a - b
    })
    filterArr = mergeIntoOne.filter((element, index) => {
    return mergeIntoOne.indexOf(element) === index;
});
    return filterArr
}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))

// let chars = ['A', 'B', 'A', 'C', 'B'];
//
// let uniqueChars = chars.filter((element, index) => {
//     return chars.indexOf(element) === index;
// });
//
// console.log(uniqueChars);


// let x =0;
// console.log("chars", chars);
// let uniqueChars = chars.filter((element, index) => {
//     let a = chars.indexOf(element);
//     let b = index;
//
//     console.log("x:", ++x)
//     console.log("element", element);
//     console.log("index", b)
//
//     console.log("chars.indexOf(element)", a);
//     console.log("a=b", a===b);
//     console.log("*********************")
//
//
//     if (a === b) {
//         return true
//     } else {
//         return false
//     }
// });

