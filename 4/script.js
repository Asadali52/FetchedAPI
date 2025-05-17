const FOX_API = "https://randomfox.ca/floof/";

const user = fetch(FOX_API);
console.log(user);

const imgSrc = document.getElementById("img");

user
    .then(function (responseObject) {
        console.log(responseObject);
        return responseObject.json();
    })
    .then(function (data) {
        console.log(data.image);
        imgSrc.src = data.image
    })