class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  push(new_data) {
    /* allocate node */
    let new_node = new Node(new_data);
    /* link the old list of the new node */
    new_node.next = this.head;
    /* move the head to point to the new node */
    this.head = new_node;
  }
  // function to linked list
  printList() {
    let n = this.head;
    while (n !== null) {
      console.log(n.data + " ");
      n = n.next;
    }
    console.log();
  }
}

function AddTwoNumber(arr1, arr2) {
  var l1 = new LinkedList();

  l1.push(3);
  l1.push(2);
  l1.push(1);

  var l2 = new LinkedList();

  l2.push(5);
  l2.push(4);

  let num1 = 0;
  let num2 = 0;

  while (l1.head?.data) {
    num1 = num1 * 10 + l1.head?.data;
    console.log("🚀 ~ file: AddTwoNumber.js:48 ~ AddTwoNumber ~ l1.head?.data:", l1.head?.data)

    l1.head = l1.head.next;
  }

  console.log(num1)

  while (l2.head?.data) {
    num2 = num2 * 10 + l2.head?.data;
    l2.head = l2.head.next;
  }

  let num3 = num1 + num2;
  console.log("🚀 ~ file: AddTwoNumber.js:60 ~ AddTwoNumber ~ num3:", num3);

  let l3 = new LinkedList();

  while (num3 > 0) {
    const length = num3.toString().length;
    l3.push(Math.floor(num3 % 10));
    num3 = Math.floor(num3 / 10);
    console.log("🚀 ~ file: AddTwoNumber.js:66 ~ AddTwoNumber ~ num3:", num3)
  }

  l3.printList();

  const result = [];

  return result;
}

AddTwoNumber(123, 45);
