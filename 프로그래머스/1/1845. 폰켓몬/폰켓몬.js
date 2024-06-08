function solution(nums) {
    const selectNum = parseInt(nums.length / 2);
    
//     // <중복 제거 방식>
//     const setNums = [...new Set(nums)].length;
//     return selectNum < setNums ? selectNum : setNums;
    
    // <해시 사용 방식>
    const hashMap = new Map();
    
    nums.map((item, i) => {
        hashMap.set(item, i);
    })
    
    console.log(hashMap.size);
    return selectNum < hashMap.size ? selectNum : hashMap.size;
}