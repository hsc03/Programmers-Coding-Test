function solution(myString, pat) {
    const newStr = myString.toLowerCase();
    const newPat = pat.toLowerCase();
    
    if (newStr.includes(newPat) === true) {
        return 1;
    } else {
        return 0;
    }
}