function solution(myString) {
    let answer = [];
    const newStr = myString.split('x');
    for (let i in newStr) {
        answer.push(newStr[i].length);
    }
    return answer;
}