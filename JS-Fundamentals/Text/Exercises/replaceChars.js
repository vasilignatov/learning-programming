function solve(str) {
    let printLine = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]){
            printLine += str[i];
        }
    }
    console.log(printLine);
}
solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd')