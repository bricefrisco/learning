function spiralCopy(inputMatrix) {
    let left = 0
    let right = inputMatrix[0].length - 1
    let top = 0
    let bottom = inputMatrix.length - 1

    const result = []
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(inputMatrix[top][i])
        }
        top++

        for (let i = top; i <= bottom; i++) {
            result.push(inputMatrix[i][right])
        }
        right--

        if (left <= right && top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(inputMatrix[bottom][i])
            }
            bottom--

            for (let i = bottom; i >= top; i--) {
                result.push(inputMatrix[i][left])
            }
            left++
        }
    }

    return result
}

// debug your code below
// const inputMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]]

// console.log(spiralCopy(inputMatrix))

const inputMatrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

console.log(spiralCopy(inputMatrix))