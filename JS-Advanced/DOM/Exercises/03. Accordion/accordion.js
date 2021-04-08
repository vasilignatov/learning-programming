function toggle() {
    const button = document.querySelector('.button');
    const divExtra = document.querySelector('#extra');
    
    if(divExtra.style.display == 'none'){
        button.textContent = 'Less';
        divExtra.style.display = 'block'; 
    } else {
        button.textContent = 'More';
        divExtra.style.display = 'none'; 
    }
}