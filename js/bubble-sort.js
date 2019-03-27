var submit = document.querySelector('#createBubble');

submit.onclick = function () {
  var input = document.getElementById('inputBubble').value;
  var array = input.split(" ");
  console.log(array);
  var buffer;
  for(var i = 0 ; i < array.length - 1; i++ ){
      for(var j = 0; j < array.length - 1 - i ; j++){
          if(array[j] > array[j+1]){
              buffer = array[j];
              array[j] = array[j+1];
              array[j+1] = buffer;
          }
      }

  }
  console.log(array);
};