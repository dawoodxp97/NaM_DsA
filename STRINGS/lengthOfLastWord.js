

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

// Bruteforce
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    let lastwordSplit = s.split(" ");
    let lastword = lastwordSplit[lastwordSplit.length - 1];
    let res = 0;
    for (const char of lastword) {
        res++
    }

    return res;
};

// Optimal shortform
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    s = s.split(" ");
    return s[s.length - 1].length
};