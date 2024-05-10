function solution(num_str) {
    let answer = 0;
    for (let i in num_str) {
        answer += Number(num_str[i]);
    }
    return answer;
}