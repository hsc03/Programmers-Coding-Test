function solution(n) {
    var answer = 0;
    n.toString(3)
        .split('')
        .map(Number)
        .forEach((num, index) => (answer += 3 ** index * num))
    return answer;
}