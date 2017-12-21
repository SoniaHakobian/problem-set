//Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin drome. 
//A palindrome is a word or phrase that is the same  rwards and backwards. A permutation is a rearrangement of letters.
//The palindrome does not need to be limited to just dictionary words.
//EXAMPLE
//Input: Tact Coa
//Output: True (permutations: “taco cat”, “atco eta”, etc.)


var isPalindrome = function(str) {
    var strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }

    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }

    return false;
};

console.log(isPalindrome('madam'));
