document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    const counterDisplay = document.querySelector('h2');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');

    function updateDisplay() {
        counterDisplay.textContent = counter;
        if(counter > 0) {
            counterDisplay.style.color = 'green';
        }
        else if(counter < 0) {
            counterDisplay.style.color = 'red';
        }
        else {
            counterDisplay.style.color = 'black';
        }
    }

    increaseButton.addEventListener('click', function() {
        counter++; 
        updateDisplay();
        increaseButton.style.borderColor = 'green';
        resetButton.style.borderColor = 'black';
        decreaseButton.style.borderColor = 'black';

    });

    decreaseButton.addEventListener('click', function() {
        counter--;
        updateDisplay();
        decreaseButton.style.borderColor = 'red';
        increaseButton.style.borderColor = 'black';
        resetButton.style.borderColor = 'black';
    });

    resetButton.addEventListener('click', function() {
        counter = 0;
        updateDisplay();
        resetButton.style.borderColor = 'blue';
        increaseButton.style.borderColor = 'black';
        decreaseButton.style.borderColor = 'black';
    });
});
