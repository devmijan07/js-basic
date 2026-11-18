const userPassword = document.getElementById('password');
const btn = document.getElementById('submit');
const displayResult = document.getElementById('result');


const correctPassword = 'javascript123';
let attemps = 0;
const maxAttempts = 3;


btn.addEventListener('click', () => {
    let password;
    password = userPassword.value;

    do {
        if(password === correctPassword) {
            displayResult.textContent = "User login successfull"
        } else {
            attemps++
           displayResult.textContent = `You have entered wrong password ${attemps} time of ${maxAttempts}`
           userPassword.value = null
        }
    } while(attemps === maxAttempts)

    if(maxAttempts === attemps || maxAttempts <= attemps) {
        displayResult.textContent = "Your account is blocked."
    }
})