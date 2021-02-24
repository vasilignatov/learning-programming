function rotateArr(arr) {
    let rotations = Number(arr.pop())    
    while(rotations > 0){
        let cur = arr.pop();
        arr.unshift(cur);
        rotations--;
    }
    console.log(arr.join(' '));
}

rotateArr(['1', '2', '3', '4', '2'])
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
