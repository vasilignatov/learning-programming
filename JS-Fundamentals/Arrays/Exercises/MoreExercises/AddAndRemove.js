function addAndRemove(arr){
    let counter = 0;
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == 'add'){
            counter++;
            result.push(counter);
        } else {
            counter++;
            result.pop()

        }
    }
    if (result.length == 0){
        console.log('Empty');
    } else {
    console.log(result.join(' '));
    }
}
addAndRemove(['add', 'remove'])