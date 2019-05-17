function ascend(data) {
    for(let i = 0; i < data.length; i ++) {
        if (data[i] > data[i + 1]) {
            console.log('false');
            return false;
        }
    }
    console.log('true');
    return true;
}

ascend([1,2,3]);