const weakPassword = document.getElementById('weakPassword');
const acceptedPassword = document.getElementById('acceptedPassword');
const passwordList = document.getElementById('passwordList');
const total = document.getElementById('total');
const passwordPercentage = document.getElementById('passwordPercentage');
const passwordStatus = {
    strong: 'Acceptable',
    weak: 'Weak'
}

let strongPasswordNumber = 0;
let weakPasswordNumber = 0;
let strongPasswordList = [];
let weakPasswordList = [];
let strongPasswordObj = {};
let weakPasswordObj = {};
let weakPass = 0;
let storngPass = 0;

const passwords = [
    "abc123",
    "javascript123",
    "hello",
    "mypassword",
    "pass",
    "394873940934",
    "yuty",
    "SimplePassword",
    "3",
    "34",
    "87"
];

for(let key of passwords) {
    passwordList.innerHTML += `<p>${key}</p>`

    if(key.length >= 8) {
        strongPasswordNumber++
        strongPasswordList.push(key)
    } else if(key.length < 8) {
        weakPasswordNumber++
        weakPasswordList.push(key)
        }
}

weakPasswordList.forEach((element) => {
    weakPasswordObj[element] = passwordStatus.weak;
    weakPassword.innerHTML += `<p><b>Password:</b> ${element}, <b>Status:</b> ${weakPasswordObj[element]}`
})

strongPasswordList.forEach((element) => {
    strongPasswordObj[element] = passwordStatus.strong;
    acceptedPassword.innerHTML += `<p><b>Password:</b> ${element}, <b>Status:</b> ${strongPasswordObj[element]}`
})

total.innerHTML  = `<p>Total Password Number: ${passwords.length}</p>
                    <p>Strong password number: ${strongPasswordList.length}
                    <p>Weak password number: ${weakPasswordList.length}`;

const weakPasswordPercentgae = () => {
    let pass = (weakPasswordList.length / passwords.length) * 100
    weakPass = Math.floor(pass * 100) / 100
    return weakPass
}

const strongPasswordPercentage = () => {
    let pass = (strongPasswordList.length / passwords.length) * 100;
    storngPass = Math.floor(pass * 100) / 100
    return storngPass
}
passwordPercentage.innerHTML = `<b>Strong password percentage is ${strongPasswordPercentage()}%, and weak password percentage is ${weakPasswordPercentgae()}%`