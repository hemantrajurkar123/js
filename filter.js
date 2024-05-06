var ages=[10,23,43,9,6,8,56]

function checkAdult(age){
    return age>18
}


var adult=ages.filter(checkAdult)


console.log('Original array is '+ages)
console.log('filtered array is '+adult)