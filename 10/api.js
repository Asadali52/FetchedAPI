let URL = 'https://dummyjson.com/products';

const title = document.getElementById('h3');
const id = document.getElementById('id');
const desc = document.getElementById('desc');
const category = document.getElementById('category');
const button = document.getElementById('btn');
const image = document.getElementById('imgBox');
const thumbnail = document.getElementById('thumbnail');

function getFetch() {
    const user = fetch(URL);
    // console.log(user);
    user
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (actualData) {
            const randomProduct = actualData.products[Math.floor(Math.random() * actualData.products.length)];
            console.log(randomProduct);
            id.innerHTML = randomProduct.id;
            title.innerHTML = randomProduct.title;
            image.innerHTML = randomProduct.images.map(img => `<img src="${img}" alt="Product Image">`);
            thumbnail.src = randomProduct.thumbnail
            desc.innerHTML = randomProduct.description;
            category.innerHTML = randomProduct.category;
        });
};

getFetch();

button.addEventListener('click', getFetch);