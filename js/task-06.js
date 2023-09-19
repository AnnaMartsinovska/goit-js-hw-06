
const userInput = document.querySelector('input');
const dataLength = userInput.getAttribute('data-length');


userInput.addEventListener('blur', () => {
    const length = parseInt(dataLength);
    if (userInput.value.length === length) {
        userInput.classList.add('valid');
        userInput.classList.remove('invalid');
    } else {
        userInput.classList.remove('valid');
        userInput.classList.add('invalid');
    }
});

