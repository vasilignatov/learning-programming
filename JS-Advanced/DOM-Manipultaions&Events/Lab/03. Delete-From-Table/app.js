function deleteByEmail() {
    const table = Array.from(document.querySelectorAll('tbody tr'));
    const input = document.querySelector('input').value;
    const result = document.getElementById('result')

    const matches = table.filter(x => x.children[1].textContent == input);
    if (matches.length > 0) {
        matches.forEach(r => r.remove())
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}