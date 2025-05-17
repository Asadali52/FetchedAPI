
{
    const JOKE_API = "https://official-joke-api.appspot.com/random_joke";
    // const jokeApi = fetch(JOKE_API);

    let setUpElement = document.getElementById("setUp");
    let punchLineElement = document.getElementById("punchLine");
    let jokeIdElement = document.getElementById("jokeId");

    function jokeFunction() {
        // jokeApi 
        fetch(JOKE_API)
            .then(function (responseObject) {
                console.log(responseObject);
                return responseObject.json();
            })
            .then(function (actualData) {
                console.log(actualData);
                jokeIdElement.innerText = actualData.id
                setUpElement.innerText = actualData.setup;
                punchLineElement.innerText = actualData.punchline
            })
    }
    jokeFunction();
}
