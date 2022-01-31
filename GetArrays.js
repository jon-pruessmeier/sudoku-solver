export default function getTheArrays(sudoku, pos_i, pos_j){
    const results = new Map();

    const row = getRow(sudoku, pos_i);
    const column = getColumn(sudoku, pos_j);
    const district = getDistrict(sudoku, pos_i, pos_j);

    results.set("row", row);
    results.set("column", column);
    results.set("district", district);

    return results;
}

/**
 * 
 * @param {Number[][]} sudoku - The actual Sudoku 
 * @param {Number} pos_i -  The actual index i of the number which shall be tested.
 * @returns an array consisting of all numbers in the related row.
 */
function getRow(sudoku, pos_i){
    let row = [];
    for (const num of sudoku[pos_i]){
        row.push(num);
    }
    return row;
}

/**
 * 
 * @param {Number[][]} sudoku - The actual Sudoku 
 * @param {Number} pos_j -  The actual index j of the number which shall be tested.
 * @returns an array consisting of all numbers in the related column.
 */
function getColumn(sudoku, pos_j){
    let column = [];
    for (let i = 0; i < sudoku.length; i++){
        column.push(sudoku[i][pos_j]);
    }
    return column
}

/**
 * This method is used to get the indices in order for getting the district in the getDistrict-method.
 * 
 * @param {Number} index - The index of the number which shall be tested (can be both the i as also the j index.)
 * @returns an array consisting of the possible indices for the district
 */

function getRange(index){
    let first = [0, 1, 2];
    let second = [3, 4, 5];
    let third = [6, 7, 8];

    switch (index){
        case (0 || 1 || 2):
            return first;
            break;
        
        case (3 || 4 || 5): 
            return second;
            break;
        
        case (6 || 7 || 8):
            return third;
            break;
        
        default:
            return [];
            break;
    }
}


/**
 * @param {Number[][]} sudoku - The actual Sudoku.
 * @param {Number} pos_i - The index i of the number which shall be tested.
 * @param {Number} pos_j - The index j of the number which shall be tested.
 * 
 * @returns an array consisting of every number in the disctrict of the number which shall be tested.
 */

function getDistrict(sudoku, pos_i, pos_j){
    let district = [];
    const rowRange = getRange(pos_i);
    const columnRange = getRange(pos_i);

    for (let i = 0; i < rowRange.length;){
        const row = rowRange[i];
        for (let j = 0; j < row.length; j++){
            const column = columnRange[j];
            district.push(sudoku[row][column]);
        }
    }
    return district;
}




