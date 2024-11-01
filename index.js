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




