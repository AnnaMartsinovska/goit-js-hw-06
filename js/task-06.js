const refs = {
    userInput: document.querySelector('input'),
};


refs.userInput.addEventListener('blur', () => {
    if (refs.userInput.value.length > 6) {
        refs.userInput.classList.add('valid');
        refs.userInput.classList.remove('invalid');
    } else {
        refs.userInput.classList.remove('valid');
        refs.userInput.classList.add('invalid');
    }
});

