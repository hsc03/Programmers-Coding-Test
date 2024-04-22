function solution(box, n) {
    let answer = 1;
    for (let i in box) {
        answer *= parseInt(box[i] / n);
    }
    return answer;
}