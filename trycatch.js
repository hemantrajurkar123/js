// source: Procodrr
async function fetchdata() {
  //if we call fetchdata in console, it will return a promise, as it is an async function
  try {
    const url = "https://dumyjson.com/users"; // we have missspelt it intentionally. To get the error.
    const response = await fetch(url); // the fetched response which is an response object will go into the response variable
    const data = await response.json(); // the response object will get converted into JSON object
    console.log("Users Data", data);
    const userData = await data.users; // it will fetch the actual users array from the JSON object
    console.log("Users", userData);
  } catch (error) {
    console.log(error);
  }
  console.log("Hello") // because we handled errors with try catch, program will not stop and will execute this line
}

fetchdata();


// try and catch block is used for error handling. If we don't handle errors in try and catch, it will show error in console as unhandled
// If we don't handle these errors program execution will stop. With try and catch,program will continue running.