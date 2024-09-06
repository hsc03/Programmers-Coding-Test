function solution(s) {
    const strNum = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];
    
    strNum.forEach((e, i) => {
        s = s.split(e).join(i);
    });
    
    return Number(s);
}