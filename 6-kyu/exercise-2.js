// Trim a String...

// Define a function trim (JavaScript: method String.prototype.trim)
// which removes all forms of leading and trailing whitespace from a given string.
// Please refer to the Sample Tests for more examples.
//
// Note: The built-in trim, trimLeft && trimRight methods has been disabled.



const trim = function(str) {
    return str.trimStart().trimEnd()
};

console.log(trim('   hello world  '))


String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.trim = function() {
    return this.replace(/^[ \t\r\n]+|[ \t\r\n]+$/g,'');
};
