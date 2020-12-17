var arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1]

const consecutive = (arr) => {
var maxConsecutive = 0, currentMaxConsecutive

for(var i = 0; i < arr.length; i++){
    currentMaxConsecutive = 0
    for(var j = i; j < arr.length; j++){
        if(arr[j] === 1){
            currentMaxConsecutive++
        }
        if(arr[j] === 0 || arr[j + 1] === undefined ) {
            if(maxConsecutive < currentMaxConsecutive){
                maxConsecutive = currentMaxConsecutive
                i = j
            }
        break
        }
    }
}
return maxConsecutive
}

console.log(consecutive(arr))