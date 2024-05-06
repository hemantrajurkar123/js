const fruits=['Apple', 'Mango','Oranges','Pineapple','Banana']
console.log("Original Array",fruits)

// array.push
const fruitPush=fruits.push('Kiwi')
console.log("Arrary Push",fruits)

// array.pop
fruits.pop()
console.log("Array Pop",fruits)

// array.shift
fruits.shift()
console.log("Array Shift removes first element of an array")
console.log(fruits)

//array unshift

fruits.unshift('Cherry','Kiwi')
console.log("Array unshift adds new elements at the start of an array")
console.log(fruits)

// flattening an array
const num=[1,2,[3,4,[5,6]]]
console.log("Original Numbers Array ",num)

// num.flat(2)
console.log("Flattened array",num.flat())