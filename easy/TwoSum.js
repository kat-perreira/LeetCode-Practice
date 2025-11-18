/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/* Favorite Solution: two pass hash map method. 
* O(n) time complexity, O(n) space complexity.
* This solution is efficient because it only requires a single pass through the array to build the hash map, and a second pass to find the pair. No nested loop.
* There is a more complex solution that requires a single pass through the array, but it is not as easily readable and the time and space savings isn't worth the 
   added confusion  as it's not as intuitive.
*/
const twoSum = (nums, target) => {
    const numToIndex = {};
    // First pass, build map
    for (let i = 0; i < nums.length; i++) {
        numToIndex[nums[i]] = i;
    }
    // Second pass, if the number exists and if it isn't itself, return the pair with number as key and index  as value
    for(let i = 0; i < nums.length; i++) {
        // target - current number is the number needed for the pair
        const numNeeded = target - nums[i]
        if(numToIndex[numNeeded] !== undefined && numToIndex[numNeeded] !== i) {
            return [i, numToIndex[numNeeded]]
        }
    }
}