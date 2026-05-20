class Solution {
    selectionSort(arr) {

        // helper function that finds the index of the smallest element
        // "start" tells it where to begin looking, so it only searches the unsorted portion
        const findSmallest = (start) => {

            // assume the first unsorted element is the smallest, until we find otherwise
            let smallestIndex = start;

            // loop through every element after "start" to check if anything is smaller
            for (let i = start + 1; i < arr.length; i++) {

                // if we find something smaller, update our record of the smallest index
                if (arr[i] < arr[smallestIndex]) {
                    smallestIndex = i;
                }
            }

            // return the index of the smallest element we found
            return smallestIndex;
        };

        // outer loop: each iteration places the correct element at position i
        // after each pass, i moves forward because arr[i] is now sorted and locked in
        for (let i = 0; i < arr.length; i++) {

            // find the smallest element in the remaining unsorted portion (from i onward)
            const smallestIndex = findSmallest(i);

            // swap: move the smallest element to position i, and move arr[i] to where smallest was
            let temp = arr[i];          // save arr[i] so we don't lose it
            arr[i] = arr[smallestIndex]; // put the smallest into position i
            arr[smallestIndex] = temp;   // put the saved value where smallest used to be
        }

        // return the now-sorted array
        return arr;
    }
}
