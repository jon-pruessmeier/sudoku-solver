import getTheArrays from "./GetArrays";

export default function solve(sudoku){
    let sudCopy = copySudoku(sudoku);
    let zeros = hasZeros(sudCopy);
    while(zeros){
        sudCopy = solveNextField(sudCopy);
        zeros = hasZeros(sudCopy);
        printSudoku(sudCopy);
    }
    return sudCopy;
}

function hasZeros(sudoku){
    for (const row of sudoku){
        if (!row.includes(0)){
            return false;
        }
    }
    return true;
}



function printSudoku(sudoku){
    console.log("##############################################");
    for (const row of sudoku){
        console.log(row);
    }
    console.log("##############################################");
}



/**
 * 
 * @param {*} sudoku 
 * @returns either the new Sudoku or an empty array if there isn't a zero left
 */
function solveNextField(sudoku){
    const [i, j] = getNextZero(sudoku);
    if (i && j){
        let newSudoku = copySudoku(sudoku);
        const map = getTheArrays(sudoku, i, j);
        const row = map.get("row");
        const column = map.get("column");
        const district = map.get("district");

        const changeWasMade = false;

        for (let k = 1; k <= 9; k++){
            if (isValidNumber(k, row, column, district)){
                newSudoku[i][j] = k;
                changeWasMade = true;
                break;
            }
        }
        if (changeWasMade){
            return newSudoku;
        }
        else {
            return [];
        }

    } else {
        return [];
    }
    
}

function isValidNumber(number, row, column, district){
    const isNotInRow = (!row.includes(number));
    const isNotInColumn = (!column.includes(number));
    const isNotInDistrict = (!district.includes(number));
    return (isNotInRow && isNotInColumn && isNotInDistrict);
}



function getNextZero(sudoku){
    for (let i = 0; i < sudoku.length; i++){
        for (let j = 0; j < sudoku[i].length; j++){
            if (sudoku[i][j] == 0){
                return [i,j];
            }
        }
    }
    return [];
}

/**
 * 
 * @param {number[][]} sudoku - The actual Sudoku
 * @returns a copy of the actual Sudoku influenced by the functional paradigm
 */
function copySudoku(sudoku){
    let sudCopy = [];
    for (let i = 0; i < sudoku.length; i++){
        sudCopy.push(Object.values(sudoku[i]));
    }
    return sudCopy;
}
