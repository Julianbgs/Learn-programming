function Neighbourhood(matrix, pos1,pos2) {
    let position = matrix[pos1][pos2];
    let pos_1 = matrix[pos1-1][pos2];
    let pos_2 = matrix[pos1-1][pos2+1];
    let pos_3 = matrix[pos1][pos2+1];
    let pos_4 = matrix[pos1+1][pos2+1];
    let pos_5 = matrix[pos1+1][pos2];
    let pos_6 = matrix[pos1+1][pos2-1];
    let pos_7 = matrix[pos1][pos2-1];
    let pos_8 = matrix[pos1-1][pos2-1];
    console.log('pos_1'+' '+ pos_1);
    console.log('pos_2'+' '+ pos_2);
    console.log('pos_3'+' '+ pos_3);
    console.log('pos_4'+' '+ pos_4);
    console.log('pos_5'+' '+ pos_5);
    console.log('pos_6'+' '+ pos_6);
    console.log('pos_7'+' '+ pos_7);
    console.log('pos_8'+' '+ pos_8);
    console.log(position);

    let buffer = 0;

    if(pos_1 === 1) {
        buffer = Number(pos_1);
    }
    if (pos_2 === 1) {
        buffer += Number(pos_2);
    }
    if (pos_3 === 1) {
        buffer += Number(pos_3);
    }
    if (pos_4 === 1) {
        buffer += Number(pos_4);
    }
    if (pos_5 === 1) {
        buffer += Number(pos_5);
    }
    if (pos_6 === 1) {
        buffer += Number(pos_6);
    }
    if (pos_7 === 1) {
        buffer += Number(pos_7);
    }
    if (pos_8 === 1) {
        buffer += Number(pos_8);
    }

    console.log(buffer);
}

Neighbourhood([ [1, 0, 1, 1, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0]],0,0);