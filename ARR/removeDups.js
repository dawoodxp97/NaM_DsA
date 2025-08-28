// Remove Duplicates from ARRAY & return k unique elements

// Brute Force
function removeDuplicates(arr) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            k++;
            arr[k] = arr[i + 1];
        }
    }
    return k;
};

// One liner
function removeDuplicates(arr) {
    return [...new Set(arr)].length;
}

// Test Cases
console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

// Time Complexity: O(n)
// Space Complexity: O(1)
