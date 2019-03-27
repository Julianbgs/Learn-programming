var submit = document.getElementById('createArray');

submit.onclick = function () {
    var value = document.getElementById('inputArray').value;
    var array = value.split(" ");
    console.log(array);
   for(var i = 0; i < array.length; i++){
       // console.log(i+ ':' + array[i]);


       for(var j = 0 ;j < array.length ;j++ ){
            if(i === j){
                continue;
            }
           if(Number(array[i]) + Number(array[j]) === 15){
               console.log(i+ ':' + array[i] + " "+ j + ":" + array[j]);
           }
       }
   }


};
