function solution(arr) {
    let answer = [];
    arr.map((num) => {
        for (let i = 1; i <= num; i++) {
            answer.push(num);
        }
    })
    return answer;
}