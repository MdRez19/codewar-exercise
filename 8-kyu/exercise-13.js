// Write a function that will check if two given characters are the same case.
//
// 1. If either of the characters is not a letter,             return -1
// 2. If both characters are letters   and the same case        return 1
// 3. If both characters are letters,  but not the same case    return 0
//
// rule 1:
//     char1 === number ||  char2 == number,   dontCare about case
// rule 2:
//     char1 != number,    char2 != number,        sameCase
// third
//     char1 != number,    char2 != number,     !sameCase

// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1


function sameCase(char1, char2) {
    //If either of the characters is not a letter,return -1
    if(!isLetter(char1) || !isLetter(char2)) { // if either value is not a letter
        return -1;
    }
    if (isLowerCase(char1) && isLowerCase(char2)) { // if both values are lowercase
        return 1;
    } else if (isUpperCase(char1) && isUpperCase(char2)) { //if both values are uppercase
        return 1;
    } else { // one value is uppercase and the other value is lowercase
        return 0;
    }
}

function isLetter(a) {
    return a.toUpperCase() !== a.toLowerCase();
}

function isLowerCase(a) {
    // a => true
    //  1 => false
    // ? => false
    // A => false
    return isLetter(a) && a === a.toLowerCase(); // is you lowercase a character it should not change
}

function isUpperCase(a) {
    // a => true
    //  1 => false
    // ? => false
    // A => false
    return isLetter(a) && a === a.toUpperCase(); // is you lowercase a character it should not change
}

console.log('\'a\' and \'g\' returns 1', sameCase('a' , 'g') === 1);
console.log('\'A\' and \'C\' returns 1', sameCase('A' , 'C' ) === 1);
console.log('\'b\' and \'G\' returns 0', sameCase('b' , 'G' ) === 0);
console.log('\'B\' and \'g\' returns 0', sameCase('B' , 'g') === 0);
console.log('\'0\' and \'?\' returns -1', sameCase('0' , '?') === -1);


console.log("eg: 1 = false", isLetter('1'));
console.log("eg: ? = false", isLetter('?'));
console.log("eg: a = true", isLetter('a'));


// char2 === char2.toLowerCase()
// a => true  ===> a === a
// * 1 => true
// A => false ===> A === a
