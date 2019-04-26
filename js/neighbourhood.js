function Neighbourhood(matrix, pos1,pos2) {
    var position = matrix[pos1][pos2];
    console.log(position);
}

Neighbourhood([[1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]],0,3);