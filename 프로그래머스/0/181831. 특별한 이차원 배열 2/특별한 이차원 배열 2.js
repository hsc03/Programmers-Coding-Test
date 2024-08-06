function solution(arr) {
    let answer = 0;
    for (let i in arr) {
        for (let j in arr) {
            if (arr[i][j] == arr[j][i]) {
                answer = 1;
            } else {
                answer = 0;
                break;
            }
        }
    }
    return answer;
}