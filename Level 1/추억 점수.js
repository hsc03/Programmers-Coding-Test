function solution(name, yearning, photo) {
    let answer = [];
    let score = 0;
    
    photo.map((array) => {
        name.map((e, i) => {
            if (array.includes(e) == true) {
                score += yearning[i];
            } else {
                score += 0;
            }
        })
        answer.push(score);
        score = 0;
    })
    return answer;
}