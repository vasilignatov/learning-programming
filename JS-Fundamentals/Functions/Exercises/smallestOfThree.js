function smallestOfThree(x, y, z) {
    let smalest = Number.MAX_SAFE_INTEGER;

    smalest = smaller(x, smalest);
    smalest = smaller(y, smalest);
    smalest = smaller(z, smalest);

    function smaller(n, small) {
        if (n < small) {
            small = n;
        }

        return small;

    }
    
    return smalest;
}

console.log(smallestOfThree(10, 11, 4))