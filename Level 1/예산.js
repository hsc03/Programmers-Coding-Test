function solution(d, budget) {
    var answer = 0
    d.sort((a, b) => a - b);
    for (let i=0; i < d.length; i++) {
        budget -= d[i];
        if (budget >= 0) {
            answer = i + 1;
        }
    }
    return answer;
}