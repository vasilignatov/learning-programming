function deleteByEmail() {
    const input = document.getElementsByName('email')[0].value;
    const table = document.querySelector('table');
    const result = document.getElementById('result');
    const rows = Array.from(document.querySelectorAll('table tr'))

        .forEach((row, i) => {
            if (row.children[1].textContent == input && i != 0) {
                table.deleteRow(i);
                result.textContent = 'Deleted';
            }
        });
    if (result.textContent !== 'Deleted') { result.textContent = 'Not found.' }
}