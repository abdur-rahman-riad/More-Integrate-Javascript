function getInputValue(filedID) {
    const inputFiled = document.getElementById(filedID);
    const inputText = inputFiled.value;
    const inputValue = parseFloat(inputText);
    inputFiled.value = '';
    return inputValue;
}

function updateTotal(filedID, amount) {
    const totalFiled = document.getElementById(filedID);
    const previousTotalInText = totalFiled.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const currentTotal = previousTotal + amount;
    totalFiled.innerText = currentTotal;
}

function updateBalance(amount, isAdd) {
    const balanceBox = document.getElementById('balance-box');
    const balanceBoxText = balanceBox.innerText;
    const previousBalance = parseFloat(balanceBoxText);
    if (isAdd == true) {
        const newBalance = previousBalance + amount;
        balanceBox.innerText = newBalance;
    }
    else {
        const newBalance = previousBalance - amount;
        balanceBox.innerText = newBalance;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-amount');
    if (amount > 0) {
        updateTotal('deposit-box', amount);
        updateBalance(amount, true);
    }
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-amount');
    if (amount > 0) {
        updateTotal('withdraw-box', amount);
        updateBalance(amount, false);
    }
});