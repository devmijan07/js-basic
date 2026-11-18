const allProductDetails = document.getElementById('allProductDetails');
const totalPrice = document.getElementById('totalPrice');
const mostExpensiveProduct = document.getElementById('mostExpensiveProduct');
let total = 0;
let objProduct;
let max = 0;

const products = {
    laptop: 65000,
    mobile: 25000,
    keyboard: 1500,
    mouse: 800,
    monitor: 12000
};

for(let key in products) {
    objProduct = products[key]
    allProductDetails.innerHTML += `<p>${key} : ${objProduct}</p>`
    total += products[key];
    totalPrice.innerHTML = total;

    if(products[key] > max) {
        max = products[key];
        mostExpensiveProduct.textContent = key;
    }
}