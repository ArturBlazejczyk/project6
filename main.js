let size = 10;
let orderElement = 1;

const init = () => {
    // tutaj kod
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Dodaj 10 elementów do listy';
    document.body.appendChild(addBtn);

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    document.body.appendChild(resetBtn);
    

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    document.body.appendChild(ul);

    addBtn.addEventListener('click', createLiElements);
    resetBtn.addEventListener('click', resetLiElements);
}

const createLiElements = () => {
    // tutaj kod
    
    for (let i = 0; i < 10; i++) {
        const liElements = document.createElement('li');
        document.querySelector('ul').appendChild(liElements);
        liElements.innerText = `Element nr ${orderElement++}`;
        liElements.style.fontSize = size++ + 'px';
    }
}

const resetLiElements = () => {
    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1;
}

init()