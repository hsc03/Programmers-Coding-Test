function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    
    for (const i in goal) {
        if (cards1[0] == goal[i]) {
            cards1.shift();
            continue
        } else if (cards2[0] == goal[i]) {
            cards2.shift();
            continue
        } else {
            answer = 'No';
        }
    }
    return answer;
}