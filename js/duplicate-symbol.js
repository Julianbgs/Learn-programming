const input = document.querySelector('#input');
input.addEventListener('change', function () {
  let data = this.value;
  let letters = this.value.split('');
  let counters = letters.reduce(function (acc, letter) {
    if (acc[letter] === 1) {
     console.log(acc[letter], 'success');
    } else {
      console.log(acc[letter], 'not correct');
    }
    return {
      ...acc,
      [letter]: acc[letter] ? acc[letter] + 1 : 1
    }
  }, {});
  console.log('counters', counters);
});
