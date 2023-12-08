function solution(n)
{
    var answer = 0;
    var strN = String(n);
    for (let i = 0; i < strN.length; i++) {
        answer += Number(strN[i]);
    }
    return answer;
}