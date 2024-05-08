function solution(a, b) {
    let answer = 0;
    let value = String(a) + String(b);
    let reverse = String(b) + String(a);
    
    if (Number(value) > Number(reverse)) {
        answer = Number(value);
    } else if (Number(value) < Number(reverse)) {
        answer = Number(reverse);
    } else {
        answer = Number(value);
    }
    
    return answer;
}