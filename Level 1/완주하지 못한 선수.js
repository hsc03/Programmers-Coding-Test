function solution(participant, completion) {
    let answer = '';
    const player = new Map();
    
    participant.forEach((p) => {
        if (player.has(p)) {
            player.set(p, player.get(p)+1);
        } else {
            player.set(p, 1);
        }
    })
    
    completion.forEach((c) => {
        if (player.has(c)) {
            player.set(c, player.get(c)-1);
        }
    })
    
    for (const [key, value] of player) {
        if (value === 1) {
            answer = key;
        }
    }
    
    return answer;
}