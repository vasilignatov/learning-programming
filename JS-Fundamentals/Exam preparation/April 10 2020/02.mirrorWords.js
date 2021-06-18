function solve([str]) {
    let pattern = /([#@])(?<wordA>[A-Za-z]{3,})\1\1(?<wordB>[A-Za-z]{3,})\1/g;
    let mirrors = [];
    let pairs
    let pairsArr = str.match(pattern);
    while ((pairs = pattern.exec(str)) !== null) {
        let secondWord = pairs.groups.wordB;
        let reversedB = secondWord.split('').reverse().join('');
        if (pairs.groups.wordA === reversedB) {
            mirrors.push(pairs.groups.wordA + ' <=> ' + pairs.groups.wordB);
        }
    }
    
    if (pairsArr == null || pairsArr.length == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairsArr.length} word pairs found!`);
    }
    if (mirrors.length != 0) {
        console.log(`The mirror words are:`);
        console.log(mirrors.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
}
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
console.log('-----------');
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
console.log('-----------');
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);