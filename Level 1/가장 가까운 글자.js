function solution(s) {
    var answer = [];
    var compareArr = [];
    
    for (let i = 0; i < s.length; i++) {
        if (compareArr.includes(s[i]) === false) {
            compareArr.push(s[i]);
            answer.push(-1);
        } else {
            answer.push(i - compareArr.lastIndexOf(s[i]));
            compareArr.push(s[i]);
        }
    }
    return answer;
}