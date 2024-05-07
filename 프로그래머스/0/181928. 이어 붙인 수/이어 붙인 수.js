function solution(num_list) {
    let answer = 0;
    let oddSum = 0;
    let evenSum = 0;
    for (let i in num_list) {
        if (num_list[i] % 2 !== 0) {
            oddSum += String(num_list[i]);
        } else {
            evenSum += String(num_list[i]);
        }
    }
    answer = Number(oddSum) + Number(evenSum);
    return answer;
}