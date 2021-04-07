function substraction() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    
    document.getElementById('result').value = num1 - num2;
}

function addition() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    
    document.getElementById('result').value = num1 + num2;
}

function multiplication() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    
    document.getElementById('result').value = num1 * num2;
}

function division() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    
    document.getElementById('result').value = num1 / num2;
}