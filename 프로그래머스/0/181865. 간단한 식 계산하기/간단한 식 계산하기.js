function solution(binomial) {
    const newBinomial = binomial.split(' ');
    switch(newBinomial[1]) {
        case '+':
            return Number(newBinomial[0]) + Number(newBinomial[2]);
        case '-':
            return Number(newBinomial[0]) - Number(newBinomial[2]);
        case '*':
            return Number(newBinomial[0]) * Number(newBinomial[2]);
        case '/':
            return Number(newBinomial[0]) / Number(newBinomial[2]);
    }
}