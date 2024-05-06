// source: Procodrr

async function fetchdata() { //if we call fetchdata in console, it will return a promise, as it is an async function
  const url = "https://dummyjson.com/users";
  const response = await fetch(url); // the fetched response which is an response object will go into the response variable
  const data = await response.json(); // the response object will get converted into JSON object
  console.log("Users Data", data);
  const userData = await data.users; // it will fetch the actual users array from the JSON object
  console.log("Users", userData);
}

fetchdata();

