var matrix = [
    [1, 3, 5, 9],
    [0, 7, 8, 0]
];
console.log(matrix);

// var transpMatrix = matrix.map(function (col, c) {
//     // For each column, iterate all rows
//      matrix.map(function (row, r) {
//         console.log(matrix[c][r]);
//     });
//
// });

// function transpose(matrix) {
//     return matrix.reduce((prev, next) => next.map((item, i) =>
//         (prev[i] || []).concat(next[i])
//
// ), []);
// }

function transpose(a) {
    return a[0].map(function (row, c) {
       console.log(c);
        return a.map(function (r) {

            // console.log(r);
            return r[c];
        });
    });
}


console.log(transpose(matrix));