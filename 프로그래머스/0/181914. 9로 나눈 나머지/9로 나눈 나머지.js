function solution(number) {
    let sum = 0;
    for (let i in number) {
        sum += Number(number[i]);
    }
    return sum % 9;
}