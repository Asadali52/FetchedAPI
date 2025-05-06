const URL = "https://dog.ceo/api/breeds/image/random";


const getFacts = async () => {
    console.log('getting data ....');
    let response = await fetch(URL);
    console.log(response); // json format
    let data = await response.json();
    console.log(data);
    document.getElementById("dog-image").src = data.message;
    document.getElementById("status").innerHTML = data.status;
}

getFacts();