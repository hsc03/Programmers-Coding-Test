function solution(n, lost, reserve) {
    let answer = 0;
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    let filteredLost = lost.filter(l => !reserve.includes(l));
    let filteredReserve = reserve.filter(r => !lost.includes(r));
    
    answer = n - filteredLost.length;
    
    filteredReserve.forEach((e, i) => {
        if (filteredLost.includes(e+1) === true || filteredLost.includes(e-1) === true) {
            const prevIndex = filteredLost.indexOf(e-1);
            if (prevIndex !== -1) {
                filteredLost.splice(prevIndex, 1);
                answer += 1;
                return;
            }
            
            const nextIndex = filteredLost.indexOf(e+1);
            if (nextIndex !== -1) {
                filteredLost.splice(nextIndex, 1);
                answer += 1;
                return;
            }
        }
    })
    return answer;
}