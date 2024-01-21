function solution(n) {
    let arr = Array(n).fill(true);
    arr[0] = false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * i; j <= n; j+=i) {
            arr[j-1] = false;
        }
    }
    return arr.filter(Boolean).length;
}