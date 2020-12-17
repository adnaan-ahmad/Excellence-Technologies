let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]

const repeated = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) return(arr[i])
    }
}
console.log(repeated(arr))