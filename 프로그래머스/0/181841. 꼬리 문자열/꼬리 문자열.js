function solution(str_list, ex) {
    let answer = '';
    for (let i in str_list) {
        if (str_list[i].includes(ex)) {
            continue
        }
        answer += str_list[i];
    }
    return answer;
}