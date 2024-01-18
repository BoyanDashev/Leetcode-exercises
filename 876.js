// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

var middleNode = function (head) {
  let twice = head;
  let once = head;
  while (twice && twice.next) {
    twice = twice.next.next;
    once = once.next;
  }
  return once;
};

console.log(middleNode([1, 2, 3, 4, 5]));


// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]