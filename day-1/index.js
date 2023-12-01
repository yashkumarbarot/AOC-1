import fs from 'fs';

function partOne(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n');
    const value = lines
    .map((line) => {
        let first = line.split('').find((v) => !Number.isNaN(Number(v)));
        console.log("first " + first);
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)));
        console.log("last " + last);
        return Number(first + last);
    });
    console.log(value);
}

partOne('./example.txt');