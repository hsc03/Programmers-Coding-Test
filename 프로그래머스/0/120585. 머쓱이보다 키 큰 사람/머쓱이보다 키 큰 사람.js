function solution(array, height) {
    let count = 0;
    for (let i in array) {
        if (height < array[i]) {
            count += 1
        }
    }
    return count;
}