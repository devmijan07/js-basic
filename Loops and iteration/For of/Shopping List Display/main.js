const shoppingList = document.getElementById('shoppingList');
const totalProducts = document.getElementById('totalProducts');

const productList = ['Rice', 'Potato', 'Oil', 'Egg', 'Milk'];

let total = 0;


for(let product of productList) {
    shoppingList.innerHTML += `<li>${product}</li>`
    total++
}

totalProducts.innerHTML = total;