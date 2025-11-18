/**
 * Determines whether a given integer x is a palindrome without converting it to a string.
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    // If x is negative, it can't be a palindrome because of the leading '-' sign.
    // If x ends in 0 but isn't 0 itself (e.g., 10, 100), it also can't be a palindrome—
    // palindromes can't start with 0.
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    // We'll build the reversed version of the *last half* of the number.
    // Only reversing half avoids integer overflow and improves performance.
    let reversedNumber = 0;

    // We'll reduce originalNumber step by step by removing its last digit each loop.
    let originalNumber = x;

    // Continue looping until we've reversed at least half of the digits.
    // For a palindrome, the reversed second half will eventually catch up to or surpass the first half.
    while (originalNumber > reversedNumber) {
        // Add the last digit of originalNumber to reversedNumber.
        // (originalNumber % 10) extracts the last digit.
        // Multiplying reversedNumber by 10 shifts it left so we can append the new digit.
        reversedNumber = (reversedNumber * 10) + (originalNumber % 10);

        // Remove the last digit from originalNumber.
        // Math.floor(originalNumber / 10) performs integer division.
        //   Example: 123 / 10 = 12.3 → Math.floor → 12
        originalNumber = Math.floor(originalNumber / 10);
    }

    // At this point:
    // - For even-digit numbers, originalNumber and reversedNumber should be exactly equal.
    // - For odd-digit numbers, reversedNumber will have one extra digit in the middle.
    //   Example: x = 12321 → originalNumber = 12, reversedNumber = 123
    //   Removing the middle digit: Math.floor(123 / 10) = 12
    return (
        originalNumber === reversedNumber ||
        originalNumber === Math.floor(reversedNumber / 10)
    );
};
