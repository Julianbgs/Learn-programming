var matrix = [
    [1, 3, 5],
    [0, 7, 8]
];

// var transpMatrix = matrix.map(function (col, c) {
//     // For each column, iterate all rows
//      matrix.map(function (row, r) {
//         console.log(matrix[c][r]);
//     });
//
// });

function transpose(matrix) {
    return matrix.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
), []);
}


console.log(transpose([
    [1, 2, 4],
    [2, 4, 7]
]));