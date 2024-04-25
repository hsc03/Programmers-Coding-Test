function solution(arr1, arr2) {
    let answer = 0;
    
    const sum_arr1 = arr1.reduce((arr, cur) => arr += cur);
    const sum_arr2 = arr2.reduce((arr, cur) => arr += cur);
    
    if (arr1.length < arr2.length) {
        answer = -1;
    } else if (arr1.length > arr2.length) {
        answer = 1;
    } else {
        if (sum_arr1 < sum_arr2) {
            answer = -1;
        } else if (sum_arr1 > sum_arr2) {
            answer = 1;
        } else {
            answer = 0;
        }
    }
    return answer;
}