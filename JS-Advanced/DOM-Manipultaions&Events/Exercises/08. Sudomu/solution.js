function solve() {

    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    const table = document.querySelector('table');
    const checkPar = document.getElementById('check').lastChild;
    const inputs = document.querySelectorAll('input');

    checkBtn.addEventListener('click', checkResult);
    clearBtn.addEventListener('click', clearFields);

    function checkResult() {

        let isDone = true;
        let result = Array.from(inputs).map(x => Number(x.value));

        const matrix = result.reduce((acc, c, i, a) => {
            if (i == 0) {
                acc.push([c]);
                return acc;
            } else if (i % 3 !== 0) {
                acc[acc.length - 1].push(c)
                return acc;
            }
            acc.push([c])
            return acc;
        }, []);

        matrix.forEach((x, i) => {
            let row = matrix[i];
            let col = matrix.map(r => r[i]);
            if (col.length != [... new Set(col)].length || row.length != [... new Set(row)].length) {
                isDone = false;
            }
        })

        if (isDone && checkInputData(result)) {
            table.style.border = '2px solid green';
            checkPar.parentNode.style.color = 'green'
            checkPar.textContent = 'You solve It! Congratulations!';
            return;
        }
        table.style.border = '2px solid red';
        checkPar.parentNode.style.color = 'red'
        checkPar.textContent = 'NOP! You are not done yet...';
    }

    function checkInputData(result) {
        const isCorrect = result.every(x => x > 0 && x <= 3);
        return isCorrect;
    }

    function clearFields() {
        Array.from(inputs).map(x => x.value = '');
        table.style.border = 'none';
        checkPar.textContent = '';
    }

}