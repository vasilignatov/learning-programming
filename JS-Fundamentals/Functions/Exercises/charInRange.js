function charInRange(a, b) {
    // transformirame simwolite v ASCII codove 'a' -> 65
    // na edin red printirame wsichki simwili mejdu dddwete stojnosti
    // izpolzvame funkciqta charCodeAt()



    let firstCode = a.charCodeAt(0);
    let secondCode = b.charCodeAt(0);
    let start = firstCode > secondCode ? firstCode : secondCode;
    let end = secondCode > firstCode ? firstCode : secondCode;
    let printLine = '';
    for (let i = start + 1; i < end; i++) {
        printLine += String.fromCharCode(i) + ' ';
    }
    return printLine
}

console.log(charInRange('#', ':'))