function solution(numbers) {
    let length = numbers.length;
    numbers.sort((a, b) => b - a);
    let multiple1 = numbers[0] * numbers[1];
    let multiple2 = numbers[length - 1] * numbers[length - 2];
    return Math.max(multiple1, multiple2);
}