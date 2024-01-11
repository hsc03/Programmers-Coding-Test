function solution(a, b, n) {
    let answer = 0;
    
    while (true) {
        n = (n - a) + b;
        answer += b;
        if (n < a) {
            break
        }
    }
    return answer;
}