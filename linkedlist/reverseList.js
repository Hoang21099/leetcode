/**206. Reverse Linked List */

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
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    // reverse pointer
    current.next = prev;
    // increment previous to current node
    prev = current;
    // increment node to next node or null at end of list
    current = next;
  }

  return prev;
};
