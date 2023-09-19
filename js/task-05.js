const refs = {
    userInput: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.userInput.addEventListener('input', onInputElChange);

function onInputElChange(evt) {
    const userName = evt.currentTarget.value.trim();
    refs.nameLabel.textContent = userName || 'Anonymous';
};
