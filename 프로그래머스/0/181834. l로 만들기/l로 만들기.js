function solution(myString) {
    let answer = '';
    const char = 'l';
    for (let i in myString) {
        if (myString[i].charCodeAt() < char.charCodeAt()) {
            answer += char;
        } else {
            answer += myString[i];
        }
    }
    return answer;
}