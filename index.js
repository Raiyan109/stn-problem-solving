// 1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const users = [
    {
        name: 'raiyan',
        age: 29,
        gender: 'male'
    },
    {
        name: 'habiba',
        age: 18,
        gender: 'female'
    },
    {
        name: 'saffana',
        age: 1,
        gender: 'female'
    },
]

const onlyFemales = users.filter((user) => user.gender === 'female')

const onlyNames = onlyFemales.map((n) => n.name)
console.log(onlyNames)




// 2. Object Manipulation: Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
const books = [
    {
        title: 'Treasure Island',
        author: 'Robert Louis',
        year: 1883
    },
    {
        title: 'Inferno',
        author: 'Dan Brown',
        year: 2013
    },
    {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        year: 1818
    },
]
const bookTitles = (books) => {
    const onlyTitles = books.map((book) => book.title)
    return onlyTitles
}
const bookTitleResult = bookTitles(books)
console.log(bookTitleResult)



// 3. Function Composition: Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
function squareNum(num) {
    return num ** 2
}
function doubleNum(num) {
    return num * 2
}
function addFive(num) {
    return num + 5
}

function functionComposition(function1, function2, function3) {
    return function (x) {
        return function3(function2(function1(x)))
    }
}

const squareThenDoubleThenAddFive = functionComposition(squareNum, doubleNum, addFive);
console.log(squareThenDoubleThenAddFive(5))



// 4. Sorting Objects: Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
    {
        name: 'Puzzerro',
        model: 22,
        year: 1883
    },
    {
        name: 'Corolla',
        model: 64,
        year: 2013
    },
    {
        name: 'Jaguar',
        model: 92,
        year: 1818
    },
]
function sortCars(cars) {
    const sortedCars = cars.sort((a, b) => a.year - b.year)
    return sortedCars
}
console.log(sortCars(cars))




// 5. Find and Modify: Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
const person = [
    {
        name: 'raiyan',
        age: 29,
    },
    {
        name: 'sabiha',
        age: 18,
    },
    {
        name: 'rajib',
        age: 13,
    },
]

function searchAndModify(peopleArray, personName, newAge) {
    const person = peopleArray.find(p => p.name === personName);
    console.log(person)

    // If the person is found, update the age
    if (person) {
        person.age = newAge;
    } else {
        console.log(`Person with name ${personName} not found.`);
    }

    // Print the updated array
    console.log(peopleArray);
}

searchAndModify(person, "raiyan", 30)
