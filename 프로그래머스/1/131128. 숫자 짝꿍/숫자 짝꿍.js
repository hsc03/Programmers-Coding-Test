function solution(X, Y) {
    let answer = '';
    let start = 0;
    let pair = [];
    
    const arrX = [...X];
    const arrY = [...Y];
    
    arrX.sort((a, b) => a - b);
    arrY.sort((a, b) => a - b);
    
    for (let i = 0; i < arrX.length; i++) {
        if (arrX[i] === arrY[start]) {
            pair.push(arrX[i]);
            start += 1;
        }
        
        if (arrX[i] > arrY[start]) {
            i -= 1;
            start += 1;
        }
        
        if (arrY[start] === arrY.length-1) {
            break
        }
    }
    
    pair.sort((a, b) => b - a);
    answer = pair.join('');
    
    if (pair.length == 0 && Number(answer) === 0) {
        answer = -1;
    } else if (Number(answer) === 0) {
        answer = 0;
    }
    
    return String(answer);
}