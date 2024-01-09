function solution(array, commands) {
    let answer = [];
    commands.map((e) => {
        const newArr = array.slice(e[0]-1, e[1]);
        newArr.sort((a, b) => a - b);
        answer.push(newArr[e[2]-1]);
    })
    return answer;
}