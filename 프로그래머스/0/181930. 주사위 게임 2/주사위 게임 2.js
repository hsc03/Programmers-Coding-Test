function solution(a, b, c) {
    if (a !== b && a !== c && b !== c) {
        return hap(a, b, c);
    } else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
        return hap(a, b, c) * squared(a, b, c, 2);
    } else {
        return hap(a, b, c) * squared(a, b, c, 2) * squared(a, b, c, 3);
    }
}

function hap(a, b, c) {
    return a + b + c;
}

function squared(a, b, c, n) {
    return Math.pow(a, n) + Math.pow(b, n) + Math.pow(c, n);
}