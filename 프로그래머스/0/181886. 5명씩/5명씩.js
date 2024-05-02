function solution(names) {
    let answer = new Array(parseInt((names.length + 4) / 5));
    for (let i in names) {
        answer[i/5] = names[i];
    }
    return answer;
}