const URl = fetch('https://fakestoreapi.com/products');

// console.log(URl);

let imgURL = document.getElementById("img");
let productTitle = document.getElementById('title');
let productDescription = document.getElementById("description");
let productPrice = document.getElementById("price");
let num = 3;

URl.
    then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (data) {
        // console.log(data[num]);
        imgURL.src = data[num].image;
        productTitle.innerText = data[num].title;
        productDescription.innerText = data[num].description;
        productPrice.innerText = data[num].price;
    })