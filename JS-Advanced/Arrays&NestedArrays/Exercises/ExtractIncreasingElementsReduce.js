function solve(arr) {
    return arr.reduce((acc, curr) => {
        if(curr > acc[acc.length -1] || acc.length === 0){
            acc.push(curr);
        }
        return acc;
    }, [])
}
console.log(solve([-5, 6, 2, 0,]))

