"use strict";
let select = document.querySelector('#typeCar');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');
let coupe = 150000;
let sedan = 200000;
let offroad = 250000;
let calc = 0;

btn.addEventListener('click', function () {
        let selectVal = select.value;
        console.log(selectVal);
        if(selectVal === 'Coupe'){
           calc = coupe;
           result.innerHTML = `<p>Общая сумма :</p>`+ " " + calc + ".";
        }
        if(selectVal === 'Sedan'){
            calc = sedan;
            result.innerHTML = `<p>Общая сумма :</p>`+ " " + calc + ".";
        }
        if(selectVal === 'Offroad'){
            calc = offroad;
            result.innerHTML = `<p>Общая сумма :</p>`+ " " + calc + ".";
        }
});
