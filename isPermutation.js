//Given two strings,write a method to decide if one is a permutation of the other.

function isPermutation(a, b) {
    if (a.length !== b.length) 
        return false;

    return a.split("").sort().join() === b.split("").sort().join();
}
isPermutation('abc', 'bca');

--------------------------------------------------------------------------------------------------
// Long solution. 
//Time complexity: O(n)
function isPermutation(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    var letters = {},
        length = a.length;

    for (var x = 0; x < length; x++) {
        var l = a.charAt(x);
        letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
    }

    for (var y = 0; y < length; y++) {
        var m = b.charAt(y);
        letters[m]--;
    }

    for (var z in letters) {
        if (letters[z] !== 0) {
            return false;
        }
    }

    return true;
}

isPermutation("dog", "god"); // true
isPermutation("dog", "gdo"); // true
isPermutation("dog", "odg"); // true
isPermutation("dog", "ogg"); // false
