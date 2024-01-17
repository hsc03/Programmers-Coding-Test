function solution(answers) {
    let answer = [];
    let arr = [];
    
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    let highScore = 0;
    
    let s1 = [1, 2, 3, 4, 5];
    let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((e, i) => {
        if (e === s1[i % s1.length]) {
            score1 += 1;
        }
        if (e === s2[i % s2.length]) {
            score2 += 1;
        }
        if (e === s3[i % s3.length]) {
            score3 += 1;
        }
    })
    highScore = Math.max(score1, score2, score3);

    if (highScore === score1) {
        answer.push(1);
    }
    if (highScore === score2) {
        answer.push(2);
    }
    if (highScore === score3) {
        answer.push(3);
    }
    return answer;
}