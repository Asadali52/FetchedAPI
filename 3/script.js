const CAT_API = "https://api.thecatapi.com/v1/images/search";

// const user = fetch(CAT_API)
// console.log(user);

const catSrc = document.getElementById("imgTag");
const catIdElement = document.getElementById("catId");
const heightElement = document.getElementById("imgHeight");
const widthElement = document.getElementById("imgWidth");

function catApi() {
    fetch(CAT_API)
        .then(function (responseObject) {
            // console.log(responseObject);
            return responseObject.json();
        }
        ).then(function (data) {
            console.log(data[0]);
            catIdElement.innerHTML = data[0].id;
            catSrc.src = data[0].url;
            heightElement.innerHTML = data[0].height;
            widthElement.innerText = data[0].width
        })
};

catApi();