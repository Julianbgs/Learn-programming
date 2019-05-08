function Neighbourhood(matrix, pos1, pos2) {


    let buffer = 0;

    for(let i = pos1 - 1; i < pos1 + 2; i++) {
        for(let j = pos2-1; j < pos2+2;j++) {
                if (i >= 0 && j >= 0 && i < matrix.length && j < matrix.length && matrix[i][j] === 1  ) {
                    matrix[pos1][pos2] = 0;
                    buffer += matrix[i][j];
                }
        }
    }
    console.log('Count'+ " "+ buffer);

}

// Neighbourhood( [[1, 0, 1, 1, 0],
//                 [0, 1, 1, 0, 0],
//                 [0, 0, 1, 0, 1],
//                 [1, 0, 0, 0, 1],
//                 [1, 1, 1, 1, 1]], 3,4);
Neighbourhood( [[1,1,1],
                [1,1,1],
                [1,1,1],
                [1,1,1],
                [1,1,1]], 2,2);