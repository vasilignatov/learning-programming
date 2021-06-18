function addItem() {

    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    if (text.value !== '') {
        let option = document.createElement('option');
        option.textContent = text.value;
        option.value = value.value;
        document.getElementById('menu').appendChild(option)
        console.log();
        text.value = '';
        value.value = '';
    }
}