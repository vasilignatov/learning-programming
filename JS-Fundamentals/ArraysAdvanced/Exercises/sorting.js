/*
обхождаме масива 
вземаме най голямото число 
вземаме най малкото число
*/

function sorting(arr) {
    let result = [];
    const stop = arr.length 
    for (let i = 0; i < stop; i++) {
        if (i % 2 == 0) {        
            let curMax = Math.max(...arr);
            arr.splice(arr.indexOf(curMax), 1)
            result.push(curMax)
        } else {               
            let curMin = Math.min(...arr);
            arr.splice(arr.indexOf(curMin), 1)
            result.push(curMin)
        }
    }
    console.log(result.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
  

