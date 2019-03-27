var submitEq = document.getElementById('submitEq');

submitEq.onclick = function () {
    var firstNum = document.getElementById('num1').value;
    var secondNum = document.getElementById('num2').value;
    var thirdNum = document.getElementById('num3').value;
    var Descriminant = (secondNum*secondNum) - 4*firstNum*thirdNum;
    var firstSolve = (-secondNum + Math.sqrt(Descriminant))/(2*firstNum);
    var secondSolve = (-secondNum - Math.sqrt(Descriminant))/(2*firstNum);


    console.log(Descriminant);
    console.log(firstSolve);
    console.log(secondSolve);
    

};