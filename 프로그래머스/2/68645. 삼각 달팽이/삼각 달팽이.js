function solution(n) {
    const answer = Array(n).fill().map((_, i) => Array(i + 1).fill(0));
    
    let num = 1;
    let [x, y] = [-1, 0];
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) {
                x += 1;
            } else if (i % 3 === 1) {
                y += 1;
            } else if (i % 3 === 2) {
                x -= 1;
                y -= 1;
            }
            answer[x][y] = num;
            num += 1;
        }
    }
    
    return answer.flat();
}