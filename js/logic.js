'use strict';

let addBtn = document.querySelector('#addInput');
let remBtn = document.querySelector('#remInput');
let space = document.querySelector('#fieldInput');
let result = document.querySelector('#result');

addBtn.addEventListener('click', function () {
    space.innerHTML += `<div class="restrict"> <input type="text" class="input" id="inputNum"> <input type="text" class="input" id="inputDescr"> </div>`
});

remBtn.addEventListener('click', function () {
   let input = document.querySelector('#inputNum');
   let inputDescr = document.querySelector('#inputDescr');
   input.remove();
   inputDescr.remove();
});

result.addEventListener('click', function () {
    let inputs = document.querySelectorAll('#inputNum');
    inputs=Array.prototype.slice.call(inputs);
    let inputsParsed = inputs.map((item) => {
       return item.value;
    });
    console.log(inputsParsed);
    inputsParsed.sort((a, b) => {
        return a - b;
    });
    console.log(inputsParsed);


    let medianIndex = Math.floor(inputsParsed.length / 2);
    console.log('num'+":"+medianIndex)
    if (inputsParsed.length % 2 === 0) {
        let median = (Number(inputsParsed[medianIndex]) + Number(inputsParsed[medianIndex - 1]))/2;
        console.log('Median' + " " + median);
    } else {
        let median = (Number(inputsParsed[medianIndex]));
        console.log('Median' + " " + median);
    }



    let sum = 0;
    for(let i=0;i<inputs.length;i++) {
        console.log(inputs[i].value);
        sum += Number(inputs[i].value);
    }
    console.log(sum);

});

