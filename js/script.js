var submit = document.getElementById('submitBtn');

submit.onclick = function () {
    var input = document.querySelector('.main__input').value;
    if (input > 100 || input < 0){
        console.log('число не совпадлает указанному диапазону')
        return;
    }
    if(input % 2 === 0){
        console.log('четно');
    }
    else{
        console.log('нечетно');
    }

};






