function solution(numLog) {
    let answer = '';
    let value = 0
    for (let i in numLog) {
        if (i == 0) {
            continue
        }
        value = numLog[i] - numLog[i-1];
        if (value == 1) {
            answer += 'w';
        }
        if (value == -1) {
            answer += 's';
        }
        if (value == 10) {
            answer += 'd';
        }
        if (value == -10) {
            answer += 'a';
        }
    }
    return answer;
}