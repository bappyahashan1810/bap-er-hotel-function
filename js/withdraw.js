document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = userFieldValueById('user-withdraw');
    const previousWithdrawAmount = getTextElementById('total-withdraw');
    const previousTotalAmount = getTextElementById('total-amount');

    if (newWithdrawAmount > previousTotalAmount) {
        alert('You Should Enter less then your Account Amount');
        return;
    }

    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;

    setElementValueById('total-withdraw', totalWithdraw);

    const totalAmount = previousTotalAmount - newWithdrawAmount;
    setElementValueById('total-amount', totalAmount);
})