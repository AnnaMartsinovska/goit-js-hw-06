function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  btnColor: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  bodyColor: document.querySelector('body'),
};

const onColor = () => {
  const randomColor = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = randomColor;
  refs.spanColor.textContent = randomColor;
}

refs.btnColor.addEventListener('click', onColor);