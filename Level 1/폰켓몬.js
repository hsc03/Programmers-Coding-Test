function solution(nums) {
    const selectNum = parseInt(nums.length / 2);
    
//     // <중복 제거>
//     const setNums = [...new Set(nums)].length;
    
//     return selectNum < setNums ? selectNum : setNums;
    
    // <해시 사용>
    const hashMap = new Map();
    
    nums.map((item, i) => {
        hashMap.set(item, i);
    })
    
    return selectNum < hashMap.size ? selectNum : hashMap.size;
}