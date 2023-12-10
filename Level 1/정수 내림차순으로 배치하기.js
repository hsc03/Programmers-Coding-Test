function solution(n) {
    var answer = 0;
    var arr = [];
    for (let i of String(n)) {
        arr.push(i);
    }
    var newArr = arr.sort().reverse().join("");
    answer = Number(newArr);
    return answer;
}