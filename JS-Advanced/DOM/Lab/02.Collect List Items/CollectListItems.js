function extractText() {
    const elements = [...document.querySelectorAll('li')];
    const elementText = elements.map(e => e.textContent);
    document.getElementById('result').value = elementText.join('\n');
}
