function solution(n) {
    var answer = 0;
    var num = Math.sqrt(n);
    if (Number.isInteger(num)) {
        answer = Math.pow(num + 1, 2);
    } else {
        answer = -1;
    }
    return answer;
}