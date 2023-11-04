function solution (matrix){
    let cols = matrix[0].length
    let rows = matrix.length
    let temp_matrix = matrix

    for(let irow = 0; irow<rows ; irow++){
        for(let icol = 0 ; icol < cols ; icol++){
            temp_matrix[icol][(rows - 1) - irow] = matrix[irow][icol]
        }
    }

    return temp_matrix
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(solution(matrix))

