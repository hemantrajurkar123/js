// source: Procodrr

const fetchData = () => {
  fetch("https://dummyjson.com/users") // the fetch method will return a promise
    .then((response) => response.json()) // the response will contain a response object that will not contain a data. We have to convert it into the JSON to get the data
    .then(console.log); // the response will be passed to the next .then function, so we can directly console log it
};

fetchData()