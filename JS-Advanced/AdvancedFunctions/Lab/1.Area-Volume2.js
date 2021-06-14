const solve = (area, vol, dataAsJSON) => JSON.parse(dataAsJSON).map(x => ({
    area: area.apply(x),
    volume: vol.apply(x)
    //      x.function = func;
}))

const example1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(area, vol, example1));