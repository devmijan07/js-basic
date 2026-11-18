const rechargeBtn = document.getElementById('btn');
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const rechargeAmount = document.getElementById('rechargeAmount');
const mobileNumber = document.getElementById('mobileNumber');
let walletBalance = document.getElementById('walletBalance');
let simAccountBalance = document.getElementById('simAccountBalance');



let walletCurrentBalance = 500;
let simCurrentBalance = 50;
walletBalance.textContent = walletCurrentBalance;
simAccountBalance.textContent = simCurrentBalance;



btn.addEventListener('click', () => { 
    while(rechargeAmount.value <= walletCurrentBalance) {
        simCurrentBalance += Number(rechargeAmount.value);
        simAccountBalance.textContent = simCurrentBalance;
        walletCurrentBalance -= rechargeAmount.value;
        walletBalance.textContent = walletCurrentBalance;
        message.textContent = `You have recharged ${rechargeAmount.value} taka.`
        rechargeAmount.value = null;
        mobileNumber.value = null;
        break
    }

    if(rechargeAmount.value > walletCurrentBalance) {
        message.textContent = `You have no sufficient balance in your wallet account.`
    }
})