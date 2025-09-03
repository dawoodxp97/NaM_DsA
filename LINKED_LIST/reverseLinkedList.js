/*Given the head of a singly linked list, reverse the list, and return the reversed list. */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr
        curr = temp;
    }
    head = prev;
    return head;
};


var reverseListOptmized = function(head) {
    let prev = null;

    while(head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
    
};