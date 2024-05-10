function solution(strArr) {
    let answer = [];
    for (let i in strArr) {
        if (strArr[i].includes('ad')) {
            continue
        }
        answer.push(strArr[i]);
    }
    return answer;
}