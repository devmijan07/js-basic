const friendList = document.getElementById('friendList');
let keyId = 0;

const friends = [
    "Rahim",
    "Karim",
    "Hasan",
    "Sakib",
    "Jamal"
];

for (let key of friends) {
    keyId++
    friendList.innerHTML += `<p>${keyId}. ${key}`
}