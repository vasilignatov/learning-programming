function sum() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;
    for(let i = 1; i<rows.length- 1; i++){
        const cols = rows[i].children;
        sum += Number(cols[cols.length - 1].textContent)
    }
    document.getElementById('sum').textContent = sum;
}

function sumTable() {
    let prices = [...document.querySelectorAll('table>tbody>tr>td:nth-child(2)')];
    prices.pop();
    document.querySelector('#sum').textContent = prices.map(x => Number(x.textContent))
    .reduce((a,b) => a + b, 0);
}