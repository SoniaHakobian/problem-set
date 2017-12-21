function isOneEdit(first, second) {

    if (first === second)
        return false;

    let len1 = first.length;
    let len2 = second.length;
    if ((len1 - len2) > 1 || (len2 - len1) > 1  ) {
        return false;
    }
    let i = 0, j = 0;
    let diff = 0;
    while (i<len1 && j<len2) {
        let f = first.charAt(i);
        let s = second.charAt(j);
        if (f != s) {
            diff++;
            if (len1 > len2)
                i++;
            if (len2 > len1)
                j++;
            if (len1 == len2)
                i++; j++;
        }
        else{
            i++; j++;
        }
        if (diff > 1) {
            return false;
        }
    }
    // If the length of the string is not same. ex. "abc" and "abde" are not one edit distance.
    if (diff == 1 && len1 != len2 && (i != len1 || j != len2)) {
        return false;
    }
    return true;
}

isOneEdit("pale", "ple");
