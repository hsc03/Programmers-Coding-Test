function solution(order) {
    let answer = 0;
    const strOrder = String(order);
    for (let i in strOrder) {
        if (strOrder[i] === '3' || strOrder[i] === '6' || strOrder[i] === '9') {
            answer += 1;
        }
    }
    return answer;
}