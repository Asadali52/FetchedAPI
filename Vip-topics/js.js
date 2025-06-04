
// //==== EXTRAS =====

// // ======= Destructuring of arrays

let colors = ['red', 'green', 'blue'];
let [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);

const [one, , three] = ['a', 'b', 'c'];
console.log(one);
console.log(three);

// swap variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

let [x = 3, y = 10] = [5];
console.log(`x = ${x}`); // 10
console.log(`y = ${y}`); // 10

// // ====== Destructuring of objects

{
    const user = {
        name: "Alice",
        age: 25,
        city: "New York"
    };
    const { name, age, city } = user;
    console.log(name);
    console.log(age);
    console.log(city);
}

{
    const user = {
        name: 'liaqat',
        age: '14',
        city: 'patoki',
    };
    const { name: a, age, city = 'kasur', country = 'pakistan' } = user;
    console.log(a);
    console.log(age);
    console.log(city);
    console.log(country);
}

{
    const user = {
        name: 'john',
        email: 'john@gmaail.com'
    };
    const { name: username, email: useremail, userCountry = 'UK' } = user;
    console.log(username);
    console.log(useremail);
    console.log(userCountry);
}

{
    // nested destructuring 
    const user = {
        name: 'sam',
        address: {
            city: 'Delhi',
            zip: '110001'
        }
    };

    const { address: { city, zip }, name } = user;
    console.log(name);
    console.log(city)
    console.log(zip);
}

// // ====== Rest operator
{
    // Rest in function Parameters
    function sum(...numbers) {
        console.log(numbers);
        return numbers.reduce((a, b) => a + b, 0)
    }
    console.log(sum(1, 2, 3));
    console.log(sum(1, 2, 3, 4, 5, 6));

}
{
    // Rest in Array Destructuring
    const colors = ['red', 'green', 'blue', 'orange', 'yellow'];
    const [first, ...restOfColors] = colors;
    console.log(first);
    console.log(restOfColors);

    const players = ['virat chokli', 'riaz ahmad', 'farooqi', 'iyer', 'gill'];
    const [noOnePlayer, ...restOfPlayers] = players;
    console.log(noOnePlayer);
    console.log(restOfPlayers)
    console.log(restOfPlayers[restOfPlayers.length - 1]);
}
{
    // Rest in Object Destructuring
    const user = {
        name: 'alice',
        age: 22,
        city: 'paris',
        email: 'alice@gmail.com'
    };
    const { name, ...rest } = user;
    console.log(name);
    console.log(rest);
    console.log(Object.keys(user));
    console.log(Object.values(user));

    // ------------------------------------------------

    let keys = Object.keys(user);
    let lastKey = keys[keys.length - 1];
    let lastValue = user[lastKey];
    console.log(`${lastKey}: ${lastValue}`);

    // -----------------------------------------------

    let entries = Object.entries(user);
    console.log(entries[entries.length - 1]);
    const [userLastKey, userLastValue] = entries[entries.length - 1];
    console.log(`${userLastKey}: ${userLastValue}`);
}


// ============== Spread Operator
{
    const fruits = ["apple", "banana", "orange"];
    const copy = [...fruits];
    console.log(copy);
}
{
    const a = [1, 2];
    const b = [3, 4];
    let merged = [...a, ...b];
    console.log(merged);
}
{
    let nums = [2, 3, 4];
    const copy = [1, ...nums, 5];
    console.log(copy);
}