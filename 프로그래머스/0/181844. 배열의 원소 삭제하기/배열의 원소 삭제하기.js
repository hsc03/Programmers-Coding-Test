function solution(arr, delete_list) {
    let answer = [];
    delete_list.map((num) => {
       if (arr.indexOf(num) !== -1) {
           arr.splice(arr.indexOf(num), 1);
       }
    })
    return arr;
}