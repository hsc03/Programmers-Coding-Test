function solution(num_list, n) {
    let arr1 = num_list.slice(n);
    let arr2 = num_list.splice(0, n);
    let answer = [...arr1, ...arr2];
    return answer;
}