function validPalindrome(input) {
    let midpoint = Math.floor(input.length/2);
    for (let i = 0; i < midpoint; i++) {
        if (input[i] !== input[input.length-1-i]) {
            return false;
        }
    }
    return true;
}

console.log("########### validPalindrome ############");
console.log("");
console.log(validPalindrome(""));
console.log("a");
console.log(validPalindrome("a"));
console.log("ab");
console.log(validPalindrome("ab"));
console.log("aaa");
console.log(validPalindrome("aaa"));
console.log("abba");
console.log(validPalindrome("abba"));
console.log("abcba");
console.log(validPalindrome("abcba"));
console.log("axba");
console.log(validPalindrome("axba"));

function substrings(input, len) {
    let substring_list = [];
    for (let start = 0; start <= input.length-len; start++) {
        let chop = input.substring(start, start+len);
        substring_list.push(chop);
    }
    return substring_list;
}

function longestPalindrome(input) {
    for (let len = input.length; len > 1; len--) {
        let currSubstrings = substrings(input, len);        
        for (let substring of currSubstrings) {
            if (validPalindrome(substring)) {
                return substring;
            }
        }
    }
    // handling edge cases
    if (input.length > 0) {
        return input[0];
    } else {
        return input;
    }
}

console.log("########### longestPalindrome ############");
console.log("'abacabd':");
console.log(longestPalindrome("abacabd"));
console.log("'ehjgkkgeh':");
console.log(longestPalindrome("ehjgkkgeh"));
console.log("'ehjg kkgeh':");
console.log(longestPalindrome("ehjg kkgeh"));
console.log("'qwertttreqwerewy':");
console.log(longestPalindrome("qwertttreqwerewy"));
console.log("'abcde':");
console.log(longestPalindrome("abcde"));
console.log("'a':");
console.log(longestPalindrome("a"));
console.log("'':");
console.log(longestPalindrome(""));
