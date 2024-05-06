// source: Procodrr

fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Ravi',
    lastName: 'Kumar',
    age: 25,
    /* other user data */
  })
})
.then(res => res.json())
.then(console.log);