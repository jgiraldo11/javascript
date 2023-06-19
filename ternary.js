// A ternary is a short-hand if/else statement. Used often and very usefull.

// it has the form:
// (condition) ? _____ : _____;

const pet = "dog";

// So instead of writing;
// let peSound;
// if(pet === "dog") {
//    pestSound = "woof";
// } else {
    petSound = "meow";
// }

//First a slightly better way:

// let petSound = "meow";
// if(petSound = "dog") {
//     petSound = "woof";
// }

// Now let's use a ternary:

const petSound = (pet === "dog") ? "woof" : "meow";


// for the eperts: nesting
const sound = (pet === "dog")
                    ? "woof"
                    : (pet === "cat")
                        ? "meow"
                        : "chirp"