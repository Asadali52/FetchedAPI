// {
//     function outer() {
//         let count = Math.random();
//         return function inner() {
//             count++;
//             console.log("Current count is : ", count);
//         }
//     }
//     console.log("outer function returns :", outer());
//     document.getElementById("countClick").addEventListener('click', () => {
//         const increase = outer();
//         increase();
//     });
// }



// {
//     function secretNumber() {
//         let number = Math.random() * 20;
//         return function () {
//             console.log("Secret number is :", number);
//         }
//     }
//     console.log(secretNumber());
//     document.getElementById("numReveal").addEventListener("click", () => {
//         const reveal = secretNumber();
//         reveal();
//     });
// }



// {
//     function multiplyBy(n) {
//         return function (x) {
//             return x * n;
//         };
//     }

//     const double = multiplyBy(4);
//     console.log(double);
//     console.log(double(5));
// }



// let x = 10;
// {
//     function outer() {

//         return function a() {
//             x++;
//             return x;
//         }

//         // return a;
//     }
//     // console.log(outer());

//     let res = outer();

//     console.log(res());
//     console.log(res());
// }



function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z);
z();