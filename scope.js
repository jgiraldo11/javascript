//Scope referers to where a variable (or function) is availible.

//With "export", we can make variables and functions availible 
//to other modules.

//But lets focus on what is happening inside a single module.

// We can define a variable (or function) "Globally", which means
// it is availible ANYWHERE inside the module.

const firstName = "Jeniffer"; // this is now global - when you declare it globally its availible everywhere.

const LastName = "Giraldo"; 

if(LastName === "Giraldo") {
    const message = "Good Morning!" // This variable is ONLY availible inside
    // this if statement
}

console.log(message); // This throws an error because message is not in scope

let greeting;

if(firstName === "Jeniffer") {
    greeting = "Hello Jeniffer.";
}

console.log(greeting);

const pet = "dog";

let petSound;

if(pet === "dog") {
    peSound = "woof";
} else {
    petSound = "meow";
}

// Let's introduce the ternary... in a minute...
// see (ternary.js)

function getBirthday(person) { //this function exists inside the function
    const birthday = "Nov. 3";
    return birthday;
}

const birthday = getBirthday(); // this birthday exists globally
console.log(birthday);