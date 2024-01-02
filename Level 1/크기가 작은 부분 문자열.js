function solution(t, p) {
    var count = 0;
    
    for (let i=0; i<t.length; i++) {
        var newT = t.substr(i, p.length);
        if (newT.length != p.length) {
            break
        }
        if (Number(newT) <= Number(p)) {
            count += 1;
        }
    }
    return count;
}