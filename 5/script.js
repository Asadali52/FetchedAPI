const API = "https://jsonplaceholder.typicode.com/posts";

const user = fetch(API);
console.log(user);

const titleElement = document.querySelector("#title");
const bodyElement = document.querySelector("#body");

user
    .then(function (responseObject) {
        console.log(responseObject);
        return responseObject.json();
    })
    .then(function (data) {
        console.log(data[0]);
        titleElement.innerHTML = data[0].title;
        bodyElement.innerHTML = data[0].body
    });