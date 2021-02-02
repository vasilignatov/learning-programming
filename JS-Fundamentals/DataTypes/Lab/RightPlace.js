function rightPlace(string, char, string2) {
    let replaceWord = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] == '_') {
            replaceWord += char;
        } else {
            replaceWord += string[i];
        }
    }  
    if (replaceWord == string2){
        console.log('Matched');
    } else{
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'o', 'Strong')