//Деструктуризация

const person = {
    name: {
        first: 'Peter',
        last: 'Alex'
    },
    age: 27
}
const { name: { first: firstName, last: lastName } } = person
const { permissions: {role = 'user'} = {} } = person
console.log(firstName, role)

function connect( {
    host = 'localhost',
    port = 12345,
    user = 'guest'
    } = {} )
{
  console.log('host:', host, 'port:', port, 'user:', user)
}
connect()

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
}
const { duck, ...otherAnimals } = dict
console.log(otherAnimals)