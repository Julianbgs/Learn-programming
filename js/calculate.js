"use strict";
// data easy car
let typeMotor = document.querySelector('#typeMotor');
let volume = document.querySelector('#volume');
let currency = document.querySelector('#currency');
let country = document.querySelector('#place');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');
// end data easy car

//data electro car
let countryElectro = document.querySelector('#placeElectro');
let motorElectro = document.querySelector('#typeMotorElectro');
let volumeElectro = document.querySelector('#volumeElectro');
let currencyElectro = document.querySelector('#currencyElectro');
let electroBtn = document.querySelector('#btnElectro');
let resultElectro = document.querySelector('#resultElectro');
//end data electro car

let openModal = document.querySelector('#openModal');
let closeModal = document.querySelector('#closeModal');
let modal = document.querySelector('#modal');
// count data
let calc = 0;
let calcUsd = 0;
// end count data

//tabs
function Tabs() {
    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function(e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    };

    bindAll();
}

let connectTabs = new Tabs();
//end tabs

openModal.addEventListener('click', function () {
    modal.style.display = 'block';

    closeModal.addEventListener('click', function () {
       modal.style.display = 'none';
       resultElectro.innerHTML = ' ';
       result.innerHTML = ' ';
    });

    window.addEventListener('click', function (e) {
        if(e.target === modal){
            modal.style.display = 'none';
        }
    })
});
// calc easy car
btn.addEventListener('click', function () {
    let countryVal = country.value;

    if (countryVal === 'usa'){
        calc = 100000;
        calcUsd = 1800;
    }
    if (countryVal === 'europe') {
        calc = 120000;
        calcUsd = 2000;
    }
    if (countryVal === 'russia') {
        calc = 60000;
        calcUsd = 1000;
    }

    let motorVal = typeMotor.value;
    if (motorVal === 'dizel') {
        calc += 20000;
        calcUsd += 350;
    }
    if (motorVal === 'benz') {
        calc += 18000;
        calcUsd += 320;
    }
    if (motorVal === 'gaz') {
        calc += 15000;
        calcUsd += 300;
    }

    let volumeVal = volume.value;

    if (volumeVal === '1200') {
        calc += 10000;
        calcUsd += 180;
    }
    if (volumeVal === '1999') {
        calc += 13000;
        calcUsd += 210;
    }
    if (volumeVal === '2400') {
        calc += 17000;
        calcUsd += 290;
    }
    if (volumeVal === '2900') {
        calc += 20000;
        calcUsd += 370;
    }

    let curVal = currency.value;

    if ( curVal === 'rub') {
        result.innerHTML = `<p>Общая сумма :</p>` + " " + calc +  ' ' + "rub.";
    }
    if( curVal === 'usd') {
        result.innerHTML = `<p>Общая сумма :</p>` + " " + calcUsd + ' ' + "usd.";
    }
});
//end calc

//calc electro car
electroBtn.addEventListener('click', function () {
    let countryElVal = countryElectro.value;

    if (countryElVal === 'usa'){
        calc = 100000;
        calcUsd = 1800;
    }
    if (countryElVal === 'europe') {
        calc = 120000;
        calcUsd = 2000;
    }
    if (countryElVal === 'russia') {
        calc = 60000;
        calcUsd = 1000;
    }

    let motorElVal = motorElectro.value;
    if (motorElVal === 'dizel') {
        calc += 20000;
        calcUsd += 350;
    }
    if (motorElVal === 'benz') {
        calc += 18000;
        calcUsd += 320;
    }
    if (motorElVal === 'gaz') {
        calc += 15000;
        calcUsd += 300;
    }

    let volumeElVal = volumeElectro.value;

    if (volumeElVal === '1200') {
        calc += 10000;
        calcUsd += 180;
    }
    if (volumeElVal === '1999') {
        calc += 13000;
        calcUsd += 210;
    }
    if (volumeElVal === '2400') {
        calc += 17000;
        calcUsd += 290;
    }
    if (volumeElVal === '2900') {
        calc += 20000;
        calcUsd += 370;
    }

    let curElVal = currencyElectro.value;

    if ( curElVal === 'rub') {
        resultElectro.innerHTML = `<p>Общая сумма :</p>` + " " + calc + " " + "rub.";
    }
    if( curElVal === 'usd') {
        resultElectro.innerHTML = `<p>Общая сумма :</p>` + " " + calcUsd + ' ' + "usd.";
    }

});
//end calc
// let data = '';
//
// let editRequest = new XMLHttpRequest();
// editRequest.onreadystatechange = function() {
//     try {
//         if (editRequest.readyState === 4) {
//             data = editRequest.response;
//             console.log(data);
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// }.bind(editRequest, this);
// editRequest.responseType = 'json';
// editRequest.open('GET', 'http://bank-ua.com/export/exchange_rate_cash.json');
// editRequest.send();

// $.ajax({
//     url: 'http://bank-ua.com/export/exchange_rate_cash.json',
//     type: "POST",
//     dataType: 'application/json; charset=utf-8',
//     success: function (data) {
//         alert(data);
//
//             // updateListing(data[x]);
//         }
//     });



