function solve([input]){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = input.match(pattern);
    console.log(matches.join(' '));
}
solve(['ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov'])