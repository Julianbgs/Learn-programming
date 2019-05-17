function Letter(data) {
    let regex = /[A-Z]/g;
    let result = "";
    let str = '';
    // str = data.match(regex);

    if (str = data.match(regex)){
        console.log('success');
        let array =  str.join('');
        console.log(array);
        return array
    } else  {
        console.log('false');
        return result;
    }

}

Letter('kjlgakAjff');