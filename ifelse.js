const name=prompt("Enter the name") // taking the name from the prompt and storing it into name variable
const age=+prompt("Enter the age") // taking the age from the prompt and storing it into name variable

debugger
if(age<=18){
    console.log(`I am ${name} and my age is ${age}`)
    console.log("I am a school student")
}

else if(age>=19 && age<=24){
    console.log(`I am ${name} and my age is ${age}`)
    console.log("I am a collage student")
}

else if(age>=25 && age<=60){
    console.log(`I am ${name} and my age is ${age}`)
    console.log("I am a working professional")
}

else if(age>60){
    console.log(`I am ${name} and my age is ${age}`)
    console.log("I am a retired person")
}

// if we write only if statements instead of if else, the execution will go to all if statements to check the condition, event if the condition get satisfied
// if we write if else, it will go till the condition is satisfied and will skip the rest of the conditions