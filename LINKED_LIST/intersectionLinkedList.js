/* Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null. */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // Store all headB into a hashMap
    let hashMap = new Map();
    let curr1 = headB;
    while (curr1) {
        hashMap.set(curr1);
        curr1 = curr1.next;
    }
    // Now check in hash for each node of headA
    let curr2 = headA;
    while (curr2) {
        if (hashMap.has(curr2)) {
            return curr2;
        }
        curr2 = curr2.next;
    }
    return null
};