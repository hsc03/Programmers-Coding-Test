function solution(my_string, index_list) {
    let answer = '';
    index_list.map((num) => {
        answer += my_string[num];
    })
    return answer;
}