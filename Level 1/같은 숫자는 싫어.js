function solution(arr) {
    let answer = [];

    arr.forEach((e) => {
        if (answer.at(-1) === e) {
            return;
        } else {
            answer.push(e);
        }
    })
    return answer;
}