document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    let inputValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    function handleClick(e) {
        const buttonValue = e.target.innerHTML;

        if (isNumber(buttonValue)) {
            handleNumberClick(buttonValue);
        } else if (isOperator(buttonValue)) {
            handleOperatorClick(buttonValue);
        } else if (buttonValue === 'AC') {
            handleClearClick();
        } else if (buttonValue === 'DE') {
            handleDeleteClick();
        } else if (buttonValue === '=') {
            handleEqualClick();
        }
    }

    function isNumber(value) {
        return !isNaN(value) || value === '.';
    }

    function isOperator(value) {
        const operators = ['+', '-', '*', '/'];
        return operators.includes(value);
    }

    function handleNumberClick(value) {
        inputValue += value;
        updateDisplay();
    }

    function handleOperatorClick(value) {
        if (inputValue !== '') {
            inputValue += value;
            updateDisplay();
        }
    }

    function handleClearClick() {
        inputValue = '';
        updateDisplay();
    }

    function handleDeleteClick() {
        inputValue = inputValue.slice(0, -1);
        updateDisplay();
    }

    function handleEqualClick() {
        if (inputValue !== '') {
            inputValue = eval(inputValue);
            updateDisplay();
        }
    }

    function updateDisplay() {
        inputBox.value = inputValue;
    }
});
