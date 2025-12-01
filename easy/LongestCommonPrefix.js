/**
 * @param {string[]} strs
 * @return {string}
 *
 * Find the longest common prefix among all strings.
 * We treat the first string as the "candidate prefix,"
 * then shrink it until all other strings start with it.
 */

// Time complexity: O(S), where n is the number of strings and m is the length of the longest string
// Space complexity: O(1), we only use a few variables  
const longestCommonPrefix = (strs) => {
    // Start by assuming the entire first string IS the prefix.
    // We'll trim it down as needed.
    let prefix = strs[0];

    // Compare the prefix against every other string in the array.
    for (let i = 1; i < strs.length; i++) {

        /**
         * While the current string does NOT start with our prefix,
         * shorten the prefix by removing one character from the end.
         *
         * indexOf(prefix) === 0 means: "prefix is at position 0",
         * i.e., this string begins with our current prefix.
         */
        while (strs[i].indexOf(prefix) !== 0) {
            // Remove the last character and try again.
            prefix = prefix.slice(0, -1);

            // If prefix becomes empty, there is no common prefix at all.
            if (!prefix) return "";
        }
    }

    // Whatever prefix remains after all checks is the answer.
    return prefix;
};