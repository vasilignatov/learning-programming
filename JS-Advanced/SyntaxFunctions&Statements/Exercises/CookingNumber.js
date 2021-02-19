function solve(num, a, b, c, d, e) {
    num = Number(num);
    let commands = [a, b, c, d, e];

    let actions = {
        chop() { return num / 2 },
        dice() { return Math.sqrt(num) },
        spice() { return num += 1 },
        bake() { return num * 3 },
        fillet() { return num * 8 /10 }
    };

    for (let action of commands) {
        num = actions[action](num);
        console.log(num);
    }
}
// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');