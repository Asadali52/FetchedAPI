const cart = ['shoes', 'pants', 'kurta'];

const promise = createOrder(cart);
console.log(promise);


promise
    .then(function (orderId) {
        console.log(orderId);
    })
    .catch(function (err) {
        console.log(err.message);
    })


// producer part


function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {

        if (!validateCart(cart)) {
            let err = new Error('Cart is not valid');
            reject(err);
        };

        const orderId = '12345';
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 2000)
        };

    });

    return pr;

};

function validateCart() {
    return true;
}