function solution(numbers, n) {
    let answer = 0;
    for (let i in numbers) {
        answer += numbers[i];
        if (n < answer) {
            break
        }
    }
    return answer;
}