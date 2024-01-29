function solution(babbling) {
    let answer = 0;
    const init = ['aya', 'ye', 'woo', 'ma'];
    
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < init.length; j++) {
            if (babbling[i].includes(init[j].repeat(2))) {
                break;
            }
            babbling[i] = babbling[i].split(init[j]).join("!");
        }
    }
    
    answer = babbling.filter(e =>{
        return /(^!+$)/.test(e)
    }).length;
    
    return answer;
}