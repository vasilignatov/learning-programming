function solve(str) {
    let result = [];
    let cap = 0;
    for (let i = 1; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            let word = str.substring(cap, i);
            result.push(word)
            cap = i;
        }
    }
    result.push(str.substring(cap, str.length))
    console.log(result.join(', '));
}
solve('SplitMeIfYouCan')