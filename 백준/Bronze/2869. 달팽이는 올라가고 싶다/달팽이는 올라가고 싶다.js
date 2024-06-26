const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = Number(input.shift());
const B = Number(input.shift());
const V = Number(input.shift());

console.log(Math.ceil((V - B) / (A - B)));