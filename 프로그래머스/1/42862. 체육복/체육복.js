function solution(n, lost, reserve) {
    let answer = 0;
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 체육복 분실했지만 여벌 체육복을 가지는 학생 빼기
    let filteredLost = lost.filter(l => !reserve.includes(l));
    let filteredReserve = reserve.filter(r => !lost.includes(r));
    
    // 최초 체육 수업이 가능한 인원
    answer = n - filteredLost.length;
    
    filteredReserve.forEach((e, i) => {
        // 여벌 체육복이 있는 사람의 앞 또는 뒤에 체육복 분실한 사람이 존재한다면
        if (filteredLost.includes(e+1) === true || filteredLost.includes(e-1) === true) {       
            const prevIndex = filteredLost.indexOf(e-1);
            const nextIndex = filteredLost.indexOf(e+1);
            console.log(e, prevIndex, nextIndex)
            
            if (prevIndex !== -1) {
                filteredLost.splice(prevIndex, 1);
                answer += 1;
                return;
            }
            
            if (nextIndex !== -1) {
                filteredLost.splice(nextIndex, 1);
                answer += 1;
                return;
            }
        }
    })
    return answer;
}