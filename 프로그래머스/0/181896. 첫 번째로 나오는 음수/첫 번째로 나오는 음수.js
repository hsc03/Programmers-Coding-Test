function solution(num_list) {
    let answer = 0;
    for (let i in num_list) {
        if (Math.sign(num_list[i]) === -1) {
            answer = Number(i);
            break
        } else {
            answer = -1;
        }
    }
    return answer;
}