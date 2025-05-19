// const COLOR_API = "https://jsonplaceholder.typicode.com/users";
// const user = fetch(COLOR_API);
// console.log(user);

let nameEle = document.querySelector("#nameElement");
let userName = document.querySelector("#userNameElement");
let email = document.querySelector("#emailElement");
let address = document.querySelector("#addressElement");
let zipcodeEle = document.querySelector("#zipcodeElement");

// user.then(function (responseObject) {
//     // console.log(responseObject);
//     return responseObject.json();
// }).then(function (actualData) {
//     console.log(actualData);
//     nameEle.innerHTML = actualData[0].name;
//     userName.innerHTML = actualData[0].username;
//     email.innerHTML = actualData[0].email;
//     adddress.innerHTML = actualData[0].address.suite;
// })


async function loadUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);

        nameEle.innerHTML = data[5].name;
        userName.innerHTML = data[5].username;
        email.innerHTML = data[5].email;
        address.innerHTML = data[5].address.city;
        zipcodeEle.innerHTML = data[5].address.zipcode
    } catch (error) {
        console.error("Failed to load user data", error);
    }
}

loadUserData();