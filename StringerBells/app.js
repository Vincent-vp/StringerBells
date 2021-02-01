'use strict';


const stringToLoop = 'Often statement 3 increments the value of the initial variable';
const charToFind = 'o';
let i;
let charsFound = []

console.log(stringToLoop);

for (i = 0; i < stringToLoop.length; i++) {
    if (stringToLoop[i].toLowerCase() === charToFind) {
        console.log('I found an ' + charToFind + ' at position ' + i + '.');
        charsFound.push({
            positon: i
        });
    };
};

