function higherOrderFunction(callback) { // higherOrderFunction : this is a higher order function because it accepts a callback function as an argument
  callback(); // The callback function needs to be executed in the higher order function
}

function callbackFunction() {   // This is callback function
  console.log("Callback function is executed");
}

higherOrderFunction(callbackFunction); // This is a function call for the callback function

//---------------------------------------------xxxxxx--------------------------------------------------------------

// we can also write a callback function directly in the higher order function
// example

function newHigherOrderFunction(newCallBack){ //newCallBack is a parameter, it will get replaced by the function we provide in the argument
newCallBack()
}

newHigherOrderFunction(function(){  //actual function passed as an argument
    console.log("New callback function executed")
})


//Learnings: Higher order function is a function which accepts other function as an argument, returns a function or both