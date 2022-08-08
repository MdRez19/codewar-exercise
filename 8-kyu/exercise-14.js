//Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them.
// You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// if more then 0 students then multiply the same number with the same amount of student
// if 0 student or less then 0, then totalBlankPaperNeed will assign to 0
// if 0 paper or less then 0, then totalBlankPaperNeed will assign to 0
// i will save total paper in a variable and return the variable
// n is student
// m is paper

// first solution
function paperwork(n, m) {
    let totalBlankPaperNeed;
    if (n >= 0 && m >= 0) {
        totalBlankPaperNeed = n * m
    } else if (n < 0 || m < 0){
        totalBlankPaperNeed = 0
    }
    return totalBlankPaperNeed
}

console.log(paperwork(0, 5))

// Second solution
// function paperwork(n, m) {
//     if (m < 0 || n < 0) {
//         return 0;
//     }
//     return m * n;
// }
//
// console.log(paperwork(0, 5))

