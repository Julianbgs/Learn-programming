var matrix = [
    [1, 3, 4, 0, 2],
    [2, 0, 1, 4, 1],
    [0, 1, 2, 4, 0],
    [4, 2, 0, 3, 1],
    [0, 1, 0, 3, 2]
];
console.log(matrix);

//forEach

var number = [1, 4, 6];
var duplicate = [];

number.forEach(function (num) {
   duplicate.push(num);
});
console.log(duplicate);

//end

var chgSubmit = document.getElementById('submitColumn');

chgSubmit.onclick = function () {
  var input = document.getElementById('changeValue').value;
  var array = input.split(" ");
  var firstNum = array[0];
  var secondNum = array[1];
  var buffer;
      if (firstNum > matrix.length || secondNum > matrix.length){
          console.log('error');
      }
      else {
          for(var i = 0; i < matrix.length; i++){
                  //var matr = matrix[i];
                  buffer = matrix[i][Number(firstNum)];
                  matrix[i][Number(firstNum)] = matrix[i][Number(secondNum)];
                  matrix[i][Number(secondNum)] = buffer;
                  console.log(matrix[i][Number(firstNum)]);


              // for ( var j = 0; j < matr.length; j++){
              //    if(j === Number(firstNum)){
              //        console.log('success');
              //        buffer = matrix[i][Number(firstNum)];
              //        matrix[i][Number(firstNum)] = matrix[i][Number(secondNum)];
              //        matrix[i][Number(secondNum)] = buffer;
              //    }
              // }
          }
          console.log(matrix);
      }

};
