function solution(num_list) {
    let multiply = num_list.reduce((acc,cur) => acc * cur);
    let sum = num_list.reduce((acc,cur) => acc + cur,0);
    let answer = (multiply < sum**2) ? 1 : 0;
    return answer;
}