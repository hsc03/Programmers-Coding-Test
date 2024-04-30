function solution(my_string) {
    let answer = [];
    const word = my_string.split(" ");
    word.filter((item) => {
        if (item !== '') {
            answer.push(item);
        }
    })
    return answer;
}