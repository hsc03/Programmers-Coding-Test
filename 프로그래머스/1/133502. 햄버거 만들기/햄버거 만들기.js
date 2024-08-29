function solution(ingredient) {
    let answer = 0;
    let items = [];
    
    for (let i in ingredient) {
        items.push(ingredient[i]);
        if (items.slice(-4).join('') === '1231') {
            answer += 1;
            items.splice(-4, 4);
        }
    }
    return answer;
}