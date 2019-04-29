'use strict';

let addBtn = document.querySelector('#addInput');
let remBtn = document.querySelector('#remInput');
let space = document.querySelector('#fieldInput');
let result = document.querySelector('#result');
let border = document.getElementById('inputBorder');
let mainRes = document.querySelector('#mainRes');
let mainSum = document.querySelector('#middleSum');
let mainMedian = document.querySelector('#mainMedian');

addBtn.addEventListener('click', function () {
    space.innerHTML += `<div class="restrict"> <input type="text" class="input" id="inputNum"> <input type="text" class="input" id="inputDescr"></div>`
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

    let median = 0;
    let medianIndex = Math.floor(inputsParsed.length / 2);
    // console.log('num'+":"+medianIndex)
    if (inputsParsed.length % 2 === 0) {
         median = (Number(inputsParsed[medianIndex]) + Number(inputsParsed[medianIndex - 1]))/2;
        console.log('Median' + " " + median);
    } else {
        median = (Number(inputsParsed[medianIndex]));
        console.log('Median' + " " + median);
    }

    let max = 0;
    let min = 0;

    for(let j = 0 ; j <inputsParsed.length  ;j++ ){
        inputsParsed[j] < inputsParsed[j+1];
        max = inputsParsed[j+1];
        if(inputsParsed[j+1] === undefined){
            max =  inputsParsed[j];
        }
        // console.log('input'+' '+max);
        }
    console.log('max' + ' ' + max);

    for(let i = 1;i < inputsParsed.length ;i++){
        min = inputsParsed[0];
    }
    console.log('min'+' '+ min);

    let kvartil = (Number(max) - Number(min))/4;
    console.log('Kvartil'+' '+ kvartil);

    let lowBorder = Number(min) + Number(kvartil);
    let highBorder = Number(max) + Number(kvartil);
    console.log('low' + ' ' + lowBorder);
    console.log('high' + ' ' + highBorder);

    let middleSum = 0;
    let sum = 0;
    for(let i=0;i<inputsParsed.length;i++) {
        sum += Number(inputsParsed[i].value);
        middleSum = sum/i;
    }
    console.log('middleSum' + ' ' + middleSum)
    console.log('Sum'+' '+ sum);

    let range = Number(highBorder) - Number(lowBorder) ;
    console.log('Range' + ' ' + range);

    let borderVal = border.value;
    console.log('Border'+ ' ' + borderVal);

     if(range === borderVal || range <= borderVal){
         mainRes.innerHTML = `<p class="resText">Результаты верны, второй тур не нужен</p>`
         mainSum.innerHTML = ` <p class="main__descr">Среднее значение</p>` + middleSum;
         mainMedian.innerHTML = `  <p class="main__descr">Медианна</p>` + median;
         console.log(borderVal);
     }else{
         mainRes.innerHTML = `<p class="resText">Результаты ошибочны, второй тур нужен</p>`
     }

});

