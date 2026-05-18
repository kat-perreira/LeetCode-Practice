// sorted list
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
//set pointers low and highest index of the array. starting at position 0, high is the last       position in the array
    let low = 0;
    let high = nums.length - 1
    console.log({low, high})
while (low <= high) {
// find the middle
    const mid = Math.floor((low + high)/2)
    const guess = nums[mid]

    if (guess === target){
// if guess is the middle, return the middle index
        return mid
    } else if (guess > target) {
// if the guess is higher than the target, start searching the lower half
        high = mid -1
    } else {
// if the guess is lower than the target, start guessing the upper half
        low = mid + 1
    }
}
return -1
};
