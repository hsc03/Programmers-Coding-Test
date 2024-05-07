function solution(my_strings, parts) {
    let answer = '';
    parts.map((item, idx) => {
        answer += my_strings[idx].slice(item[0], item[1]+1);
    })
    return answer;
}