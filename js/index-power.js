function index(data, index) {
    let indexNum = data[index];
     indexNum = Math.pow(Number(indexNum),Number(index));
     if(index >= data.length) {
         return -1;
     }
    console.log(indexNum);
     return indexNum;

}

index([0,1,3,3],2);