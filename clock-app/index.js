const applyTime = document.getElementById("time");
const button = document.getElementById("stop-btn")

function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    applyTime.innerText = time;
    console.log(time)
}

let interval = setInterval(showTime, 1000);

button.addEventListener('click', () => {
    clearInterval(interval);
})


// let a = 10;
// function timeStart() {
//     if (a >= 0) {
//         console.log(a--);
//     }
// }

// setInterval(timeStart, 1000);