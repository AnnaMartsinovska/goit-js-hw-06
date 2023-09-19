const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addIngredients = array => {
 return array.map(el => { 
    const liEl = document.createElement('li');
    liEl.textContent = el;
    liEl.classList.add('item');
    return liEl;
  });
};

const ulIngr = document.querySelector('#ingredients');
ulIngr.append(...addIngredients(ingredients));
