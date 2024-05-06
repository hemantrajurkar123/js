// source: Procodrr

// const url='https://dummyjson.com/users';

// async function fetchData(){
//     try{
//     const response=await fetch(url)
//     if(!response.ok){
//         throw new Error("Response was not ok")
//     }
//     const userData=await response.json()
//     console.log(userData.users)
//     return userData
//     }
//     catch (error){
//         console.error("Error",error)

//     }

// }

// fetchData()

// Writing using then function

// function fetchData(){
//      fetch('https://dummyjson.com/users').then(response=>{
//         if(!response.ok){
//             throw new Error("Response was not on")
//         }
//         console.log("Response JSON",response.json())
//         return response.json()

//     }).then(userData=>{
//         console.log(userData.users)
//     }).catch(error=>{
//         console.log("Error",error)
//     })

// }

// fetchData()

// Writing for practice

function fetchData() {
  fetch("https://dummyjson.com/users")
    .then((response) => {
      return response.json();
    })
    // .then((response) => {
    //     console.log("Original response",response)
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   return response.json();
    // })
    .then((userData) => {
      console.log(userData);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

fetchData();
