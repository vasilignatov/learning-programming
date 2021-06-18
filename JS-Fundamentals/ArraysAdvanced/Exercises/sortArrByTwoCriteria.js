function sorting(arr) {
    arr.sort((a, b) => compare(a, b));
    function compare(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
    console.log(arr.join('\n'));
}
sorting(["alpha", "beta", "gamma"])
//beta     alpha   gamma
sorting(["Isacc", "Theodor", "Jack", "Harrison", "George"]);