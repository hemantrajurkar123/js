// source: Procodrr

const resolveBtn=document.querySelector('#resolve-btn')
const rejectBtn=document.querySelector('#reject-btn')

const p=new Promise((resolve,reject)=>{
    resolveBtn.addEventListener('click',()=>{
        resolve("Promise resolved")
    })
    rejectBtn.addEventListener('click',()=>{
        reject("Promise rejected")
    })
})

p.then((data)=>{
    console.log("Hello Promise")
    console.log(data) // This data will come from the data we wrote in resolve method above. output:"Promise resolved"
    console.log(p)


}).catch((error)=>{
    console.log("Promise is rejected")
    console.log(error)
})

// A promise is a special type of object. It has methods such as then, catch and finally
// We can create a promise by a new Promise keyword. We have to have a callback function in the Promise function
// Else it will throw an error
// We can call resolve and reject method in the Promise. 
// .then will be invoked when the promise is resolved. For the error or rejection we have to have a .catch method or else it will throw an error if unhandled
// .then and .catch methods also has to have a callback function