const API = `https://dentistry99-a5904c057644.herokuapp.com/products?approved=${true}`;

const imageSource = document.querySelector("#imgSrc");
const publishedDate = document.getElementById("createdDate");
const titleElement = document.getElementById("titleEle");
const descriptiveTitleElement = document.querySelector("#descriptiveTitleEle");
const subImg = document.getElementById("subCategoryImg");
const categoryImg = document.getElementById("categoryImg");

function fetchApi() {
    const user = fetch(API);
    user
        .then(function (response) {
            return response.json();
        })
        .then(function (actualData) {
            console.log(actualData);
            const randomProduct = actualData.data[Math.floor(Math.random() * actualData.data.length)];
            imageSource.src = randomProduct.images[0];
            publishedDate.innerHTML = randomProduct.createdAt;
            titleElement.innerHTML = randomProduct.title;
            descriptiveTitleElement.innerHTML = randomProduct.descriptiveTitle;
            subImg.src = randomProduct.subCategory.image;
            categoryImg.src = randomProduct.subCategory.category.image;
        })
        .catch((err) => {
            console.log(err)
        })
}

fetchApi();