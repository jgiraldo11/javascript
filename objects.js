const student = {
    firstName: 'Lorenzo',
    lastName: 'Mokwa',
    age: 19,
    student: true,
}

console.log(student.firstName)

// ----------------- let's get a bit more advanced -------------------

// creating an object from seprate variables: (long hand)

const make = 'Audi'
const model = 'A3'
const year = 2018


const myCar = { make, model, year} // assemble 3 variables into a single object (short hand)

// Frequently, we have an object and we want to break it in to separate variables

//*** This is called "destructuring". ***

// we have an oject;

const movie ={
    title: 'Fight Club',
    writer: 'Chuck P.',
    year: 1999,
    genre: 'Action',
}

// lame way:

// const title = movie.title
//const writer = movie.writer
// const genre = movie.genre

// or we can be awsome and write:

const { title , writer, genre } = movie

console.log (title)
