function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt();
        
        if (code >= 65 && code <= 90) {
            answer += String.fromCharCode((code + n - 65) % 26 + 65);
        }
        if (code >= 97 && code <= 122) {
            answer += String.fromCharCode((code + n - 97) % 26 + 97);
        }
        if (code === 32) {
            answer += ' ';
        }
    }
    return answer;
}