function userFieldValueById(InputValueId) {
    const inputValue = document.getElementById(InputValueId);
    const newInputValueString = inputValue.value;
    const newInputValue = parseFloat(newInputValueString);
    inputValue.value = '';
    if (isNaN(newInputValue)) {
        alert('Please Enter right Number');
        return 0;
    }
    return newInputValue;
}

function getTextElementById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textValueString = textElement.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

function setElementValueById(elementId, newValue) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
}