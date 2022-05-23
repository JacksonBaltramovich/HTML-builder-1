const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({ input, output });

const myPath = path.join(__dirname, '/text.txt');
const writableStream = fs.createWriteStream(myPath, 'utf-8', {flags: 'w'});


rl.question('Hello world, enter you text: ' + '\n', (answer) => {
    if(answer === 'exit'){
        process.exit();
    }
    writableStream.write(answer + '\n');
});

rl.on('line', (line) => {
    if(line === 'exit') {
        process.exit();
    }
    writableStream.write(line + '\n');
});

process.on('exit', () => {
    console.log('See you latter, all the best! :)')
});