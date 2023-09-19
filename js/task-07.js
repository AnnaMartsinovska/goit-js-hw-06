const refs = {
    inputRange: document.querySelector('#font-size-control'),
    nameLabel: document.querySelector('#text'),
};


refs.inputRange.addEventListener('input', onInputChange);

function onInputChange(evt) {
    const range = evt.currentTarget.value;
    refs.nameLabel.style.fontSize = range + 'px';
};

