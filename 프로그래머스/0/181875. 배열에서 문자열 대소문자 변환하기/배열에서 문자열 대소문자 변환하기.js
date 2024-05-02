function solution(strArr) {
    let answer = [];
    strArr.map((item, idx) => {
        if (idx % 2 === 0) {
            answer.push(item.toLowerCase());
        } else {
            answer.push(item.toUpperCase());
        }
    })
    return answer;
}