

document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositValue = userFieldValueById('user-deposit');
    const previousDepositValue = getTextElementById('total-deposit');
    const totalDepositValue = newDepositValue + previousDepositValue;
    setElementValueById('total-deposit', totalDepositValue);

    const previousTotalAmount = getTextElementById('total-amount');
    const totalAmount = newDepositValue + previousTotalAmount;
    setElementValueById('total-amount', totalAmount);



})