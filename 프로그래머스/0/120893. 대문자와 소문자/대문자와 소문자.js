function solution(my_string) {
    let answer = '';
    for (let i in my_string) {
        if (my_string[i] === my_string[i].toLowerCase()) {
            answer += my_string[i].toUpperCase();
        } else {
            answer += my_string[i].toLowerCase();
        }
    }
    return answer;
}