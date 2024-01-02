function solution(number) {
    var answer = 0;
    
    for (let i=0; i<number.length; i++) {
        for (let j=0; j<number.length; j++) {
            for (let z=0; z<number.length; z++) {
                if (i !== j && j !== z && i !== z) {
                    if ((number[i] + number[j] + number[z]) === 0) {
                        answer += 1;
                    }
                }
            }
        }
    }
    return answer / 6;
}