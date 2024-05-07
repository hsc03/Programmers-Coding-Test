function solution(n, control) {
    let answer = n;
    for (let i in control) {
        if (control[i] === 'w') {
            answer += 1;
        } else if (control[i] === 's') {
            answer -= 1;
        } else if (control[i] === 'd') {
            answer += 10;
        } else if (control[i] === 'a') {
            answer -= 10;
        }
    }
    return answer;
}