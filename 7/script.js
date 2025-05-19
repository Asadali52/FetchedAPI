const API = 'https://jsonplaceholder.typicode.com/comments';

const idElement = document.querySelector("#idEle");
const nameElement = document.getElementById("nameEle");
const emailElement = document.getElementById("emailEle");
const bodyElement = document.querySelector("#bodyEle");


function fetchApi() {
    const user = fetch(API);
    user.then(function (response) {
        // console.log(response);
        return response.json();
    })
        .then(function (data) {
            const randomComment = data[Math.floor(Math.random() * data.length)];
            console.log(randomComment);
            idElement.innerHTML = randomComment.id
            nameElement.innerHTML = randomComment.name;
            emailElement.innerHTML = randomComment.email;
            bodyElement.innerHTML = randomComment.body;
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
        })
};

fetchApi();

// console.log(Math.floor(Math.random() * 500));