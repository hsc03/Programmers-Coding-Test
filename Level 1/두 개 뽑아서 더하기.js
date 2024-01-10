function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if (i != j) {
                if (answer.includes(sum) == false) {
                    answer.push(sum);
                }
            } else {
                continue
            }
        }
    }
    return answer.sort((a, b) => a-b);
}