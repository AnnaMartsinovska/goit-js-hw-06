const liItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(elem => {
    const title = elem.querySelector('h2').textContent;
    const ulElements = elem.querySelectorAll('ul>li');
    
    console.log(`Category: ${title}\n Elements: ${ulElements.length}`);
});