function solution(lottos, win_nums) {
    let answer = [];
    const zeroCnt = lottos.filter((e) => e === 0).length;
    const fixedAnswer = win_nums.filter((e) => lottos.includes(e)).length;
    const maxRank = fixedAnswer + zeroCnt;
    
    if (maxRank > 0) {
        answer.push(7 - maxRank); 
    } else {
        answer.push(6);
    }
    
    if (fixedAnswer > 0) {
        answer.push(7 - fixedAnswer);
    } else {
        answer.push(6);
    }
    
    return answer;
}