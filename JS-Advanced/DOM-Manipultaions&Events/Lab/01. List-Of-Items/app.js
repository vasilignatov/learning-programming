function addItem() {
    const ulElement = document.getElementById('items');
    let input = document.getElementById('newItemText'); 
    const newLi = document.createElement('li');
    if(input.value !== '') {
        newLi.textContent = input.value;
        ulElement.appendChild(newLi);
    }
    input.value = '';
}

