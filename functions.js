// function is a block of code which performs some actions
// we declare a function with function name and write the code inside it to execute.
// whenever we want to execute the code inside the function, we call the function by its name
// Example:
function introduceMe(){  // function with the name introduceMe. code block starts
    console.log("My name is Akash")
    console.log("My age is 24")
    console.log("I am a Developer")
}                        // function code block ends with closing curly braces

introduceMe()  // function call

//function with parameters and arguments
function introduceMe(name, age, profession){ // function parameters will get replaced by function arguments on the function call
    const obj={name,age,profession}   // we are creating one object dynamically with the keys name, age, and profession
    console.log(`My name is ${name}`)
    console.log(`My age is ${age}`)
    console.log(`I am a ${profession}`)
    return obj      // we are returning the obj to the function on the function call. The total value of this function code will be the object with key values
}

const returnValue= introduceMe("Akash",23,"Developer")  // we can store the 'return' value of the function in the variable
console.log(returnValue)