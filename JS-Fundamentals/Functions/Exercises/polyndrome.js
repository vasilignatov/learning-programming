function polyndrome(arr) {
    let result = '';
    for (let num of arr) {
        let isPolyndrome = 'true';
        let str = String(num);
        let reversed = str.split('')
            .reverse()
            .join('');
        isPolyndrome = str === reversed ? 'true' : 'false';
        result += isPolyndrome + '\n'
    }
    return result;
}
console.log(polyndrome([123, 323, 421, 121]));



function polyndrome2(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let num = arr[i];
        let reversedNum = '';

        while (num > 0) {
            reversedNum += num % 10;
            num = num / 10;
            num = Math.trunc(num);
        }
        reversedNum = Number(reversedNum);
        console.log(currentNum === reversedNum)
    }

}
polyndrome2([123, 323, 421, 121])


function polindrome(arr) {

    function reverseStr(str) {
        let strRev = '';
        for (let i = str.length - 1; i >= 0; i--) {
            strRev += str.charAt(i);
        }

        return strRev;
    }
    let result = '';
    for (let i = 0; i < arr.length; i++){
        let num = String(arr[i]);
        
        if(num == reverseStr(arr[i].toString())){
            result += 'true' + ' \n';
        } else {
            result += 'false' + '\n';
        }
    }
    return result;
}
console.log(polindrome([123, 323, 421, 121]))
