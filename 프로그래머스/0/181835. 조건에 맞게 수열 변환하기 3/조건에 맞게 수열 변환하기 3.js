function solution(arr, k) {
    let answer = [];
    for (let i in arr) {
        if (k % 2 !== 0) {
            answer.push(arr[i] * k);
        } else {
            answer.push(arr[i] + k);
        }
        
    }
    return answer;
}