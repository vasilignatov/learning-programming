function processOdd(arr){
    let filtered  = arr.filter(isOddIndex)

    let doubled = filtered.map(x => x * 2);

    let reversed = doubled.reverse().join(' ')
    function isOddIndex(value, index){
        return (index % 2) == 1;
    }

    console.log(reversed);
}

processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);