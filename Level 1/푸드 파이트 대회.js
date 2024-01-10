function solution(food) {
    let answer = '';
    let cnt = 0;
    
    for (let i = 1; i < food.length; i++) {
        if (food[i] != 1) {
            cnt = parseInt(food[i] / 2);
            while (true) {
                cnt--;
                answer += String(i);
                if(cnt==0) {
                    break
                }
            }
        } else {
            continue
        }
    }
    return answer + '0' + answer.split("").reverse().join("");
}