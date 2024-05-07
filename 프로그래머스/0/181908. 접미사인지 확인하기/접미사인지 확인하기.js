function solution(my_string, is_suffix) {
    let answer = 0;
    if (my_string.endsWith(is_suffix) === true) {
        return 1;
    } else {
        return 0;
    }
    return answer;
}