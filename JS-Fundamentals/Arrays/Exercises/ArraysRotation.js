function arrRotation(arr, num) {
    for(let i = 0; i < num; i++){
        const el = arr.shift();
        arr.push(el);
    }
    console.log(arr.join(' '));
}
// arrRotation([51, 47, 32, 61, 21], 2)
arrRotation([32, 21, 61, 1], 4)