function addItem() {
    const input = document.getElementById('newItemText')
    const liElement = createElement('li', input.value);

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('ckick', (ev) => {
        ev.target.parentNode.remove();
    })    

    document.getElementById('items').append(liElement);
    liElement.append(deleteBtn)
    input.value = '';

    function createElement(type, content){
        const element = document.createElement(type);
        element.textContent = content;
        return element
    }
}

