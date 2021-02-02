function rightPlace(str, char, result){
    let res = str.replace('B', char);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);
}
rightPlace('ABA', 'A', 'AAA')