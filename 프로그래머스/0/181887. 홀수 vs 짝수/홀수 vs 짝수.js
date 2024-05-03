function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    
    for (let i in num_list) {
        if (i % 2 === 0) {
            evenSum += num_list[i];
        } else {
            oddSum += num_list[i];
        }
    }
    
    if (evenSum < oddSum) {
        return oddSum;
    } else {
        return evenSum;
    }
}