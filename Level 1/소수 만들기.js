function solution(nums) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let z= j+1; z < nums.length; z++) {
                
                if (nums[i] !== nums[j] && nums[i] !== nums[z] && nums[j] !== nums[z]) {
                    sum = nums[i] + nums[j] + nums[z];
                    
                    if (isPrime(sum)) {
                        answer += 1;
                    }
                }
                
            }
        }
    }
    return answer;
}
    
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1;
}