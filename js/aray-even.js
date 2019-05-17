function arrayEven(data) {
    let sum = 0;
    let result = 0;
    let lastElem = data[data.length - 1];
    console.log('lastElem : ' + lastElem);

    if(data.length === 0) {
        console.log(result);
        return 0;
    }

    for(let i = 0; i < data.length; i++){
        if(i % 2 === 0) {
            sum += data[i];
        }
    }
    result = sum * lastElem;
    console.log(sum);
    console.log(result);
    return result;
}

arrayEven([0, 1, 2, 3, 4, 5]);