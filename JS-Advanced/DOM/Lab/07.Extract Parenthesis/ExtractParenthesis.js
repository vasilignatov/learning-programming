function extract(id) {
    const text = document.getElementById(id).textContent;
    
    const regex = /\((.+?)\)/gm;
    let result = [];

    while(match = regex.exec(text)){
        result.push(match[1]);
    }
    
    return result.join('; ')
}   