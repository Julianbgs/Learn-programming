"use strict";

function longRepeat(data) {
    let buffer = 0;
    let result = 0;
    let current = '';
    let array = data.split("");
    for(let i = 0;  i < array.length ;i++) {
        if(array[i-1] === array[i]) {
            current += array[i];
        }

    }
    console.log(array);
    console.log(current);
}

longRepeat('sdffgggdjjjj');