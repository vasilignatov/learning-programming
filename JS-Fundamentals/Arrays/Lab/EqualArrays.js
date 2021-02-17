function equalArrays(arr1, arr2){
    let index = 0;
    let result = ''
    let sum = 0;
    while(index < arr1.length){
        if (arr1[index] == arr2[index]){
            sum += Number(arr1[index]);
        } else {
            result = `Arrays are not identical. Found difference at ${index} index`;
            break;
        }
        index++;
        result = `Arrays are identical. Sum: ${sum}`
    }
    console.log(result);
}
equalArrays(['1'], ['10'])