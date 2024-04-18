function solution(numbers) {
    let answer = [];
    numbers.map((num) => {
        answer.push(num * 2);
    })
    return answer;
}