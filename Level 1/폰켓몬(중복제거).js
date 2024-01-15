function solution(nums) {
    let answer = 0;
    const selectNum = parseInt(nums.length / 2);
    const setNums = [...new Set(nums)].length;
    if (selectNum < setNums) {
        answer = selectNum;
    } else {
        answer = setNums;
    }
    return answer;
}