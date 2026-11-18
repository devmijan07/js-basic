const menuItem = document.getElementById('menuItem');
const highestPrice = document.getElementById('highestPrice');
const lowestPrice = document.getElementById('lowestPrice');
let max = 0;
let min = Infinity;


const menu = {
    biryani: 250,
    burger: 180,
    pizza: 450,
    sandwich: 120,
    coffee: 100
};


for(let key in menu) {
    menuItem.innerHTML += `<p>${key} : ${menu[key]}</p>`

    if(menu[key] < min) {
        min = menu[key]
        console.log(min)
    }

    if(menu[key] > max) {
        max = menu[key]
    }
}

highestPrice.innerHTML = max;
lowestPrice.innerHTML = min;