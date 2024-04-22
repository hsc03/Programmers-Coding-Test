function solution(my_string) {
    let answer = 0;
    for (let i in my_string) {
        if (Number(my_string[i])) {
            answer += Number(my_string[i]);
        }
    }
    return answer;
}