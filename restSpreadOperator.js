// Spread operator. Spreads an array into its individual parts

const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 8, 9];

const combinedArray = [...arr1, ...arr2, 34];
console.log("Combined Array", combinedArray);

// Rest operator. when there are number of arguments that we do not know

function testFunction(arr1, ...args) {
  console.log("Arg1", arr1);

  console.log("Arguments", args);
}

testFunction(arr1, 30, 35);
