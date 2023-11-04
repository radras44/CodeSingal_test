function solution(grid) {
    const register = [
        [[], [], []], [[], [], []], [[], [], []]
    ]

    console.log(register)
    const breakpoints = [0, 3, 6]

    for (const rowStart of breakpoints) {
        for (const colStart of breakpoints) {
            //obtener sub grid de 3x3
            let subGrid = new Array(3).fill(null)
                .map(() => new Array(3).fill(null))
            for (let irow = 0; irow < 3; irow++) {
                for (let icol = 0; icol < 3; icol++) {
                    let val = grid[rowStart + irow][colStart + icol]
                    subGrid[irow][icol] = val
                }
            }

            //verificar paralelismo entre el subGrid y register en cada posicion
            for (let irow = 0; irow < 3; irow++) {
                for (let icol = 0; icol < 3; icol++) {
                    let val = subGrid[irow][icol]
                    let posRegister = register[irow][icol]
                    console.log(val)
                    console.log(posRegister)
                    if (val !== ".") {
                        if (posRegister.includes(val)) {
                            return false
                        } else {
                            register[irow][icol].push(val)
                        }
                    }
                }
            }

        }
    }
    //en este punto a pasado todas las comprobaciones
    return true
}

grid = [['.', '.', '.', '1', '4', '.', '.', '9', '.'],
['.', '.', '6', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '1', '.', '.', '.', '.', '.', '.'],
['.', '6', '7', '.', '.', '.', '.', '.', '9'],
['.', '.', '.', '.', '.', '.', '8', '1', '.'],
['.', '3', '.', '.', '.', '.', '.', '.', '6'],
['.', '.', '.', '.', '.', '7', '.', '.', '.'],
['.', '.', '.', '5', '.', '.', '.', '7', '.']]

console.log(solution(grid))

