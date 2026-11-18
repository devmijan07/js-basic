const userInput = document.getElementById('pin');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const atmPin = 1111;
const maxAttemps = 3;
let attemps = 0;

btn.addEventListener('click', () => {
    let enteredInut = Number(userInput.value)
    while(attemps < maxAttemps) {
        attemps++
        if(enteredInut === atmPin) {
            message.textContent = `Access Granted.`
            userInput.value = null;
            attemps = 0;
        }
        if(enteredInut != atmPin) {
            let existAttemps = maxAttemps - attemps;
            message.textContent = `You have use ${attemps} of ${maxAttemps} you can try ${existAttemps} more attemps.`
        }
        if(attemps === maxAttemps) {
            message.textContent = 'Your account is blocked'
        }
       break
    }
})