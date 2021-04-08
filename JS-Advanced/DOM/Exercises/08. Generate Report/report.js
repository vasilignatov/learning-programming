// function generateReport() {
//     const rows = Array.from(document.querySelectorAll('tbody>tr'));
//     const columnsChecbox = Array.from(document.querySelectorAll('table thead tr th'));
//     const output = document.getElementById('output');

//     let checkedIndex = [];
//     const report = [];

//     columnsChecbox.forEach((x, i) => {
//         const input = x.firstElementChild;
//         if (input.checked) {
//             checkedIndex.push(i);
//         };
//     });

//     rows.forEach(row => {
//         let temp = {};
//         checkedIndex.forEach(x => {
//             let key = columnsChecbox[x].textContent;
//             let value = row.children[x].textContent;
//             temp[key] = value;
//         });
//         report.push(temp);
//     });

//     output.value = JSON.stringify(report, null, 2);
// }


function generateReport() {
    const rows = Array.from(document.getElementsByTagName('tbody')[0].children);
    const checkEls = Array.from(document.querySelectorAll('thead input'));
    const output = document.getElementById('output');

    output.value = JSON.stringify(rows.reduce((a, c) => {
        let temp = {};
        Array.from(c.children).forEach((x, i) => {
            if (checkEls[i].checked) {
                temp[checkEls[i].name] = x.textContent;
            }
        })
        return [...a, temp];
    }, []), null, 2)
}

