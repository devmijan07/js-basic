const product = {
    name: "Laptop",
    price: 65000,
    quantity: 2,
    category: "Electronics"
};

const productDetails = document.getElementById('productDetails');
const totalPrice = document.getElementById('totalPrice');

for(let key in product) {
    productDetails.innerHTML += `<p>${key}: ${product[key]}</p>`
    totalPrice.innerHTML = product['price'] * product['quantity']
}