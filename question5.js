let obj = [
    { id : 4, name : 'abc' },
    { id : 10, name : 'abc2' },
    { id : 5, name : 'abc3' },
    { id : 6, name : 'abc5' }
]

const sort = (obj) => {

for(let i = 0; i < obj.length - 1; i++){
    
    for(let j = i + 1; j < obj.length; j++){
        if(obj[i].id > obj[j].id){
            let temp = obj[i]
            obj[i] = obj[j]
            obj[j] = temp
        }
    }
}
return obj
}
console.log(sort(obj))
