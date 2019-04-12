var strSubmit = document.getElementById('getString');

strSubmit.onclick = function () {
  var input = document.getElementById('inputString').value;
  var split = input.split(" ");
  var reg = /^[А-Я]{1}[а-я]{1,}$/;
  for(var i = 0 ; i < split.length ; i++){
    //var result = reg.exec(split[i]);
    var result = split[i].match(reg);
      console.log(result);
  }

};