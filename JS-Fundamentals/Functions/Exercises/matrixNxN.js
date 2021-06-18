function matrix(n){
    let currentRow = '';
    for(let column = 1; column <= n; column++){
        currentRow += n + ' ';
    }
    for (let row = 1; row <= n; row++){
        console.log(currentRow);
    }
}
matrix(100);


