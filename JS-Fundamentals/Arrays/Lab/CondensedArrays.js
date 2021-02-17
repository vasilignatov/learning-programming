
function condenseArrToNum(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    let result = '';
    while (nums.length > 1) {
        let condensed = [];
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1];
            
        }
        nums = condensed;
        result = condensed;
    }
    return result.join('');
}
console.log(condenseArrToNum([1]))

