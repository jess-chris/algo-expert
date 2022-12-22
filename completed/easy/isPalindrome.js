function isPalindrome(string) {

const copy = string.split("").reverse().join('');

return string === copy;

}

let str = "abcdcba"

console.log(isPalindrome(str));

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
