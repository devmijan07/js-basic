const mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 85000,
    color: "Black",
    storage: "256GB"
};

const display = document.getElementById('details');
for(let key in mobile) {

    display.innerHTML += `<p> ${key} : ${mobile[key]}`
}