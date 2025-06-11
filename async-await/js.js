// async function getData() {
//     return 'namaste';
// }

// console.log(getData());
// const dataPromise = getData();

// dataPromise
//     .then(function (res) {
//         console.log(res);
//     });

// **************************************************//

// const p = new Promise((resolve, reject) => {
//     resolve('Promise resolved value!!');
// });

// async function getData() {
//     return p;
// };

// const promiseData = getData();
// console.log(promiseData);

// promiseData.then((res) => console.log(res));

// **************************************************//

// const p = new Promise((resolve, reject) => {
//     resolve('Promise resolved value!!');
// });

// function getData() {
//     p.then(res => console.log(res))
// };

// getData();

// **************************************************//

// OLD WAY=======

//     const p = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise resolved value');
//         }, 10000);
//     });

//     function handlePromise() {
//         const val = p;
//         val.then(res => console.log(res));
//         console.log('nm js');
//     }

//     handlePromise();


// ************************************************** //

// WITH ASYNC AWAIT==========

// {
//     const p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise resolved value');
//         }, 10000);
//     });

//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise resolved value');
//         }, 5000);
//     });

//     async function handlePromise() {

//         console.log('Hello World');

//         const val = await p1;
//         console.log('nm js');
//         console.log(val);

//         const val2 = await p2;
//         console.log('nm js 2');
//         console.log(val2);

//     }

//     handlePromise();
// }


// API


{
    const API_URl = 'https://api.github.com/users/AsadAli52';

    async function handlePromise() {

        try {
            const data = await fetch(API_URl);
            const value = await data.json();
            console.log(value);
            console.log(value.login);

        } catch (err) {
            console.log(err);
        }

    }

    handlePromise();
}