function solution(N, stages) {
    let answer = [];
    let holdUser = 0;
    let reachedUser = 0;
    
    let failureRate = new Object();
    let sortedRate = [];
    
    stages.sort((a, b) => a - b);
    
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < stages.length; j++) {
            if (i === stages[j]) {
                holdUser += 1;
            }
            if (i <= stages[j]) {
                reachedUser += 1;
            }
        }
        failureRate[i] = holdUser / reachedUser;
        holdUser = 0;
        reachedUser = 0;
    }
    
    for (let num in failureRate) {
        sortedRate.push([num, failureRate[num]]);
    }
    
    sortedRate.sort((a, b) => b[1] - a[1]);
    
    for (let num in sortedRate) {
        answer.push(Number(sortedRate[num][0]));
    }
    return answer;
}