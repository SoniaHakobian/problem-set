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
