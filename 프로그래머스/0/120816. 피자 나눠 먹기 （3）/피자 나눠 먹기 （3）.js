function solution(slice, n) {
    let answer = 0;
    if (n % slice >= 1) {
        answer = parseInt(n / slice) + 1;
    } else if (n % slice == 0) {
        answer = parseInt(n / slice);
    }
    return answer;
}