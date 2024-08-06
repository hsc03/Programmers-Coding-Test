function solution(numLog) {
    let answer = '';
    let value = 0
    for (let i in numLog) {
        if (i == 0) {
            continue
        }
        value = numLog[i] - numLog[i-1];
        // if (value == 1) {
        //     answer += 'w';
        // }
        // if (value == -1) {
        //     answer += 's';
        // }
        // if (value == 10) {
        //     answer += 'd';
        // }
        // if (value == -10) {
        //     answer += 'a';
        // }
        switch (value) {
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
                break;
        }
    }
    return answer;
}