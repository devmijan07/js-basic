const highestValue = document.getElementById('highestValue');
const totalPrice = document.getElementById('totalPrice');
const productDetails = document.getElementById('productDetails');

let total = 0;
let highestPrice = 0;
let highestPriceProductName = '';

const itemList = [
    {productName: "Biryani", price: 250},
    {productName: "Burger", price: 180},
    {productName: "Pizza", price: 450},
    {productName: "Sandwich", price: 120},
    {productName: "Coffee", price: 100},
]

for(let key of  itemList) {
    productDetails.innerHTML += `<p>${key.productName}: ${key.price}</p>`;

    total += key.price

    totalPrice.innerHTML = `<h3>Total Price</h3>
                            <p>Total price: ${total}`

    if(key.price > highestPrice) {
        highestPrice = key.price
        highestPriceProductName = key.productName
    }
}

highestValue.innerHTML = `<h3>Highest Value</h3>
                            <p>Prodcut Name: ${highestPriceProductName}</p>
                            <p>Prodcut Price: ${highestPrice}</p>`