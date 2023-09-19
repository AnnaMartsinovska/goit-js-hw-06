const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onBtnDecrementListener = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const onBtnIccrementListener = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

btnDecrement.addEventListener('click', onBtnDecrementListener);
btnIncrement.addEventListener('click', onBtnIccrementListener);
