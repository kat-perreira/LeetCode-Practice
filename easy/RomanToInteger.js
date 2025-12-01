/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let total = 0
    const numberMap =
    {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // max value seen so far going right to left
    const length = s.length
    let maxSeen = 0;

    // iterate string from right to left
    for (let i = length - 1; i >= 0; i--) {
        let currentIndex = numberMap[s[i]]
        // if the number before is greater than the current, it needs to subtract
        if (maxSeen > currentIndex) {
            total -= currentIndex
        }
        // if number before is less than, add to total, replace maxSeen with new current index
        else {
            total += currentIndex
            maxSeen = currentIndex
        }
    }

    // complexity: Time - O(n), iterate string once from right to left ; Space - O(1), store a fixed sized map and variables
    return total
};