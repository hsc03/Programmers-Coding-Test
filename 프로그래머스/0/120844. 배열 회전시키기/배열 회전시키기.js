function solution(numbers, direction) {
    let answer = numbers.slice();
    let value = '';
    if (direction === 'right') {
        value = answer.pop();
        answer.unshift(value);
    } else {
        value = answer.shift();
        answer.push(value);
    }
    return answer;
}