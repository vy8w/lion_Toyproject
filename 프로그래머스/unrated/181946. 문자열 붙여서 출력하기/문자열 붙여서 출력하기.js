const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const str1 = input[0];
    const str2 = input[1];
    const concatenatedStr = str1 + str2;
    console.log(concatenatedStr);
});