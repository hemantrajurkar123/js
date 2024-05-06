//write a map function to show the full name of the user

const users=[
    { firstname:'Virat',lastName:'Kohli'},
    { firstname:'Rohit',lastName:'Sharma'},
    { firstname:'Ishan',lastName:'Kishan'}

]

function fullName(users)
{
    return (users.firstname+' '+users.lastName)
}
const newUsers=users.map(fullName)

console.log(newUsers)