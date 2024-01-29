function solution(dartResult) {
    let answer = 0;
    const seperate = dartResult.match(/(\d{1,2})(S|D|T)(\*|#)?/g);
    let scores = [];

    for (let i = 0; i < seperate.length; i++) {
        const match = seperate[i].match(/(\d{1,2})(S|D|T)(\*|#)?/);
        let score = Number(match[1]);
        const bonus = match[2];
        const option = match[3];

        if (bonus === 'D') {
            score = Math.pow(score, 2);
        } else if (bonus === 'T') {
            score = Math.pow(score, 3);
        }

        if (option === '*') {
            score *= 2;
            if (i > 0) {
                scores[i - 1] *= 2;
            }
        } else if (option === '#') {
            score *= -1;
        }

        scores.push(score);
    }

    answer = scores.reduce((acc, e) => acc + e);
    return answer;
}
