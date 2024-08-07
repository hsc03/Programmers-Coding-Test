function solution(n) {
    let answer = Array.from({ length: n }, () => Array(n).fill(0));
    sortNum(0, 0, 1, n, answer);
    return answer;
}

function sortNum(y, x, num, n, answer) {
    if (n <= 0) return;
    answer[y][x] = num;
    
    for (let i = 1; i < n; i++) {
        x++;
        num++;
        answer[y][x] = num;
    }
    
    for (let i = 1; i < n; i++) {
        y++;
        num++;
        answer[y][x] = num;
    }
    
    for (let i = 1; i < n; i++) {
        x--;
        num++;
        answer[y][x] = num;
    }
    
    for (let i = 1; i < n-1; i++) {
        y--;
        num++;
        answer[y][x] = num;
    }
    sortNum(y, x+1, num+1, n-2, answer);
}