function solution(todo_list, finished) {
    let answer = [];
    finished.map((item, idx) => {
        console.log(item)
        if (item === false) {
            answer.push(todo_list[idx]);
        }
    })
    return answer;
}