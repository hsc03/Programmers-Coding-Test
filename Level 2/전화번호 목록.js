function solution(phone_book) {
    phone_book.sort();
    
    return !phone_book.some((num, idx, arr) => arr[idx+1]?.indexOf(num) === 0);
}