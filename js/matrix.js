var matrix = [
    [1, 3, 4, 0, 2],
    [2, 0, 1, 4, 1],
    [0, 1, 2, 4, 0],
    [4, 2, 0, 3, 1],
    [0, 1, 0, 3, 2]
];
console.log(matrix);

var submit = document.getElementById('changeArray');
var buffer;
var firstCol;
var secondCol;
submit.onclick = function () {
    var input = document.getElementById('inputValue').value;
    var array = input.split(" ");
    var firstCol = array[0];
    var secondCol = array[1];
    console.log(firstCol);
    console.log(secondCol);
    if(firstCol > matrix.length || secondCol > matrix.length){
        console.log('error')
    }
    else {
        buffer = matrix[firstCol];
        matrix[firstCol] = matrix[secondCol];
        matrix[secondCol] = buffer;
        console.log(matrix);
    }

};