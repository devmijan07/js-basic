const totalExpence = document.getElementById('totalExpence');
const expenceAbove100 = document.getElementById('expenceAbove100');
const todaysExpence = document.getElementById('todaysExpence');


let expenceAbove100List = [];
let total = 0;

const expenceList = [
    {expSideBudg: "Breakfast", expence: 50},
    {expSideBudg: "Lunch", expence: 120},
    {expSideBudg: "transport", expence: 200},
    {expSideBudg: "Tea", expence: 80},
    {expSideBudg: "Dinner", expence: 15}
]


for(let item of expenceList) {
    todaysExpence.innerHTML += `<li>${item.expSideBudg}: ${item.expence}`;

    if(item.expence > 100) {
        expenceAbove100List.push(item.expence);
        expenceAbove100.innerHTML += `<li>${item.expSideBudg}: ${item.expence}`;
    }
    total += item.expence;
    totalExpence.innerHTML = `Total Expence: ${total}`;
}
