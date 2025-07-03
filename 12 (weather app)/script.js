const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=360b29f1697f407fb2a63930250107&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.country}, ${result.location.region} - ${result.location.name}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
})