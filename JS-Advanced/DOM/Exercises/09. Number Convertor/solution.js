window.addEventListener(onload, solve);

function solve() {

    const toMaenu = document.getElementById('selectMenuTo');
    
    const binary = document.createElement('option');
    binary.value = 'binary';
    binary.text = 'Binary';
    toMaenu.appendChild(binary);
    
    const hexadecimal = document.createElement('option');
    hexadecimal.value = 'hexadecimal';
    hexadecimal.text = 'Hexadecimal';
    toMaenu.appendChild(hexadecimal);
    
    const btn = document.querySelector('button');
    btn.addEventListener('click', getResult);
    
    function getResult() {
        const input = Number(document.getElementById('input').value);

        if(toMaenu.value == 'binary') {
            console.log(input.toString(2));
            document.getElementById('result').value = input.toString(2);
        }
        if(toMaenu.value == 'hexadecimal') {
            console.log(input.toString(16));
            document.getElementById('result').value = input.toString(16);
        }
    }
}