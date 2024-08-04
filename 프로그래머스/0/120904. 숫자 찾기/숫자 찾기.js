function solution(num, k) {
    let answer = 0;
    const strNum = String(num);
    return strNum.includes(k) ? strNum.indexOf(k) + 1 : -1;
}

