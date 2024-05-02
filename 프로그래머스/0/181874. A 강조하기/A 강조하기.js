function solution(myString) {
    let answer = '';
    const str = myString.split('');
    str.map((item) => {
        if (item === 'a' || item === 'A') {
            answer += item.toUpperCase();
        } else {
            answer += item.toLowerCase();
        }
    })
    
    return answer;
}