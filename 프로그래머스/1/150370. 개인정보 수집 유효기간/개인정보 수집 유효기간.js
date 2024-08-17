function solution(today, terms, privacies) {
    let answer = [];
    const [year, month, day] = today.split('.');
    const date = convertDate(Number(year), Number(month), Number(day));
    
    const termsTypes = {}
    terms.forEach((item) => {
        const [termsType, month] = item.split(' ');
        termsTypes[termsType] = Number(month);
    })
    
    privacies.forEach((privacy, idx) => {
        const [privacyDate, privacyType] = privacy.split(' ');
        const [pYear, pMonth, pDay] = privacyDate.split('.');
        const period = convertDate(Number(pYear), Number(pMonth), Number(pDay)) + (termsTypes[privacyType] * 28);
        if (period <= date) answer.push(idx+1);
    });
    return answer.sort((a, b) => a - b);
}

function convertDate(y, m, d) {
    return y * 12 * 28 + m * 28 + d;
}
 