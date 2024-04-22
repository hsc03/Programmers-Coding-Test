function solution(n) {
    let answer = 0;
    {
        Number.isInteger(n / 7) === false ?
            answer = parseInt(n / 7) + 1 : answer = parseInt(n / 7)
    }
    return answer;
}