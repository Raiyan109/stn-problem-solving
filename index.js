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










