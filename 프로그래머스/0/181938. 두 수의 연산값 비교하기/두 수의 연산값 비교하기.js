function solution(a, b) {
    let answer = 0;
    let combine = String(a) + String(b);
    let value = 2 * a * b;
    
    if (Number(combine) > value) {
        answer = Number(combine);
    } else if (Number(combine) < value) {
        answer = value;
    } else {
        answer = Number(combine);
    }
    
    return answer;
}