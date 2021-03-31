function solve(arr) {
    let num = 1;
    let  result = [];
    for (const el of arr) {
        if(el == 'add') {
            result.push(num);
        } else if (el == 'remove') {
            result.pop();
        }
        num++
    }
    return result.length === 0 ? 'Empty' : result.join('\n')

}
console.log(solve(['add', 
'add', 
'add', 
'add']
))
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
))
console.log(solve(['remove', 
'remove', 
'remove']
))