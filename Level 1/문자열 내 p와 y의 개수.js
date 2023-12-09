function solution(s){
    var answer = true;
    var p_cnt = 0;
    var y_cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'p' || s[i] == 'P') {
            p_cnt += 1;
        }
        if (s[i] == 'y' || s[i] == 'Y') {
            y_cnt += 1;
        }
    }
    if (p_cnt == y_cnt) {
            answer = true;
        } else {
            answer = false;
        }
    return answer;
}