function printSquare(n){

    printHeaderFooter(n);
    printMiddleRow(n);
    printHeaderFooter(n);


    function printHeaderFooter(n){
        console.log('-'.repeat(2 * n));
    }

    function printMiddleRow(n){
        let line = '-';

        for(let i = 0; i < n; i++){
            line += "\\/" ;
        }

        line += '-';
        for(let j = 0; j < n; j++){
            console.log(line);
        }
    }

}

printSquare(10)