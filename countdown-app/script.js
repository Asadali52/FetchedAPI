let input = document.getElementById("input");
let button = document.getElementById("btn");
let showCountdown = document.getElementById("para");

button.addEventListener("click", () => {
    let countdownValue = parseInt(input.value);
    if (countdownValue > 0) {
        let interval = setInterval(() => {
            if (countdownValue > 0) {
                showCountdown.innerText = countdownValue--;
            } else {
                clearInterval(interval);
                console.log('Finished');
                showCountdown.innerText = 'Finished';
            }
        }, 1000);
    }
});



// let input = document.getElementById("input");
// let button = document.getElementById("btn");
// let showCountdown = document.getElementById("para");

// function a() {
//     if (input.value >= 1) {
//         console.log(input.value--);
//         showCountdown.innerText = input.value;
//     };
// };

// let click = button.addEventListener("click", a);
// setInterval(click, 1000);