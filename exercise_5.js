// Calculate average

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.


function find_average(array) {
    // your code here
    let total = 0;
    let average = 0;
    if (array !== []) {
        for (let i = 0; i < array.length; i++) {
            total += array[i];
            average = total / array.length;
        }
        return average;
    }
    return 0;
}

console.log(find_average([]));