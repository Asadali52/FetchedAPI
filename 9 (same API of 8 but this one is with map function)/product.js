const PRODUCT_API = `https://dentistry99-a5904c057644.herokuapp.com/products?approved=${true}`;

function fetchApi() {
    fetch(PRODUCT_API)
        .then(function (response) {
            return response.json()
        })
        .then(function (actualData) {
            const products = actualData.data;
            const container = document.getElementById('product-container');
            console.log(products);

            products.map(product => {
                const div = document.createElement('div');
                div.classList.add('product');

                div.innerHTML = `
                   <div class="product-images" style="display: flex; gap: 10px">
                   ${product.images.map(img => `<img src="${img}" alt="Product Image">`).join('')}
                    </div>

                    <h2>${product.title}</h2>
                    <p>${product.descriptiveTitle}</p>
                    <p><strong>Created At:</strong> ${product.createdAt}</p>
                    <div>
                        <strong>Category:</strong><br>
                        <img src="${product.subCategory.category.image}" alt="Category Image">
                    </div>
                    <div>
                        <strong>Subcategory:</strong><br>
                        <img src="${product.subCategory.image}" alt="Subcategory Image">
                    </div>
                `;

                container.appendChild(div);
            });
        })
        .catch(err => {
            console.error('Error fetching products:', err);
        });
}

fetchApi();