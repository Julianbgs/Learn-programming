"use strict";

function longRepeat(data) {
    let array = data.split("");
    // let map = new Map();
    let count = 1;
    let result = 0;
    let letter = '';
    if(array.length === 0){
        return;
    }
    letter = array[0];
    // let get = '';
    for (let i = 0; i < array.length - 1; i++) {
        // get = map.get(array[i]);
        // if(get === undefined) {
        //     map.set(array[i], 1);
        // } else {
        //     get ++;
        //      map.set(array[i], get);
        // }
        if (array[i] === array[i+1]){
            count ++;
        } else {
            count = 1;
        }

        if(count >= result ){
            result = count;
            letter = array[i];
        }
            }
    console.log('Result : ' +result + ' ' + 'Letter : ' + letter );
    return result;
}

longRepeat('sdsffffssssssse');