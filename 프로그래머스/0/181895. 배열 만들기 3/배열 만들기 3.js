function solution(arr, intervals) {
    let answer = [];
    intervals.map((interval) => {
        answer.push(...arr.slice(interval[0], interval[1]+1));
    })
    return answer;
}