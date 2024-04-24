function solution(num_list) {
    let answer = [];
    
    num_list.sort((a, b) => a - b);
    for (let i in num_list) {
        answer.push(num_list[i]);
        if (answer.length === 5) {
            break
        }
    }
    return answer;
}