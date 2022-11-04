/*
Cat years, Dog years

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

 */

// 1 human year is 15 years of cat and dog
// 2 human yeas is 24 years of cat and dog
// 3 human years is 28 years of cat
// 3 human years is 29 years of dog
// 4 human years is 32 years of cat
// 4 human years is 34 years of dog






let humanYearsCatYearsDogYears = function(humanYears) {
    let cat = 15
    let dog = 15
    // Your code here!
    let result = [0,0,0]
    if(humanYears === 1){
        result = [humanYears, cat, dog]
    } else if (humanYears === 2){
        cat = 15 + 9
        dog = 15 + 9
        result = [humanYears, cat, dog]
    } else if(humanYears > 2){
        let twoYearsAfter = humanYears - 2
        cat = 24 + (4 * twoYearsAfter)
        dog = 24 + (5 * twoYearsAfter)
        result = [humanYears, cat, dog]
    }
    return result;
}
console.log(humanYearsCatYearsDogYears(10))
