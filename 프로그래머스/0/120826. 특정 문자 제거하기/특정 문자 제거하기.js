function solution(my_string, letter) {
    let answer = '';
    for (let i in my_string) {
        if (my_string[i] === letter) {
            continue;
        }
        answer += my_string[i];
    }
    return answer;
}