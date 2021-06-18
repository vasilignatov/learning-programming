function certificate(grade, namesArr){

    if (pass(grade)){
        printHeader();
        printName();
        formatGrade(grade);
    } else {
        console.log(`${namesArr[0]} ${namesArr[1]} does not qualify`);
    }



    function pass(grade){
        return grade >= 3;
    }
    

    function printHeader(){
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~~~~~~~~~~~~~~~');
    }

    function printName(nameArr) {
        console.log(namesArr[0] + ' ' + namesArr[1]);
    }

    function formatGrade(grade){
        let result = '';
        if (grade < 3){
            result = 'Fail (2)';
        } else if (grade < 3.5){
            result = `Poor (${grade.toFixed(2)})`
        } else if (grade < 4.5){
            result = `Good (${grade.toFixed(2)})`
        } else if (grade < 5.5){
            result = `Very Good (${grade.toFixed(2)})`
        } else {
            result = `Excellent (${grade.toFixed(2)})`
        }

        console.log(result);
    }
    



}
certificate(2.99, ['Vasil', 'Ignatov']);

