

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
/*
Brute Force: T&S
trim internally loops so o(n), and split also o(n), so Time would be o(2n) ~ o(n).
Split internally creates a array so space would be o(n)

Time: O(n)
Space: O(n)
*/


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

// Optimised solution

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Remove spaces i.e Trim
    let n = s.length - 1;
    while(n>=0) {
        if(s[n] === " "){
            --n;
        }else{
            break;
        }
    }

    // Count the char till you reach the space.
    let count = 0;
    while(n>=0){
        if(s[n] === " "){
            break;
        }else{
            --n;
            count++;
        }
    }
    return count;
};

/*
Optimised solution: T&S

To remove spaces we're looping so o(n), and to count the char we're also looping so o(n), so Time would be o(2n) ~ o(n).
we've created one variable "n", "count" so it's constant space would be o(1)

Time: O(n)
Space: O(1)
*/


// Optimised solution 2 (Do it in Single Loop)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    let count = 0;
    while(n>=0){
        if(s[n] === " "){
            --n;
            if(count > 0){
                break;
            }
        }else{
            --n;
            count++;
        }
    }
    return count;
};

/*
Optimised solution 2: T&S

To remove spaces we're looping so o(n), and to count the char we're also looping so o(n), so Time would be o(2n) ~ o(n).
we've created one variable "n", "count" so it's constant space would be o(1)

Time: O(n)
Space: O(1)
*/
