//Bubble Sort

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// function bubbleSort(array) {
//     let swaps = 0;
//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] > array[i + 1]) {
//             swap(array, i, i + 1);
//             swaps++;
//         }
//     }
//     if (swaps > 0) {
//         return bubbleSort(array);
//     }
//     return array;
// };

// console.log(bubbleSort([1,2,0]))

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

//   console.log(
//     mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])
//   );

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

//console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]));

// 1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// Answer: 1. [21,1,26,45,29,28,2,8,9] [21,1,26,45] [21,1]
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// Answer: [16 49	39	27	43	34	46	40]
//
// What are the first 2 lists to be merged?
// Answer: [1] [21]
// Which two lists would be merged on the 7th merge?
//[1,21,26,45] [2,9,28,29]

// 2. Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

// The pivot could have been 17, but could not have been 14
// Answer: The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot
// The pivot could have been 14, but could not have been 17

// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
//10	3	13	15	19	14	17	16	9	12
// When using the first item on the list as a pivot
//3	 9	10	12	19	14	17	16	13	15

//Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is:

let string = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];
function qSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      greater.push(array[i]);
    } else {
      lesser.push(array[i]);
    }
  }

  return qSort(lesser).concat(pivot, qSort(greater));
}

//   console.log(qSort(string));

function mSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mSort(left), mSort(right));
}

function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// console.log(mSort(string))

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, this.size++);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;

      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, this.size++);
    }
  }

  insertAfter(item, key) {
    let currNode = this.head;
    let previousNode = currNode;

    if (!this.head) {
      return null;
    }
    while (currNode !== null && previousNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;

      if (currNode.next === null) {
        console.log("Node not found");
        return null;
      }
    }
    previousNode.next = new _Node(item, currNode, this.size++);
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let previousNode = null;

    if (!this.head) {
      return null;
    }

    if (this.head.value === key) {
      this.insertFirst(item);
      return;
    }

    while (currNode !== null && currNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
      if (currNode.next === null) {
        console.log("Node not found");
        return null;
      }
    }

    previousNode.next = new _Node(item, currNode, this.size++);
  }

  insertAt(item, pos) {
    let currNode = this.head;
    let previousNode = null;
    let counter = 1;
    if (!this.head) {
      return null;
    }

    if (pos <= 1) {
      this.insertFirst(item);
      return;
    }

    while (currNode !== null && counter !== pos) {
      previousNode = currNode;
      currNode = currNode.next;
      if (currNode === null) {
        console.log("Out of bounds");
        return;
      }
      counter++;
    }
    previousNode.next = new _Node(item, currNode, this.size++);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  _findNthItem(pos) {
    let node = this.head;

    for (let i = 0; i < pos; i++) {
      node = node.next;
    }
    return node;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head === this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}
const ll = new LinkedList();

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Function to mergesort a linked list
LinkedList.prototype.mergeSort = function (list) {
  if (list.next === null) return list;

  let count = 0;
  let countList = list;
  let leftPart = list;
  let leftPointer = list;
  let rightPart = null;
  let rightPointer = null;

  // Counting the nodes in the received linkedlist
  while (countList.next !== null) {
    count++;
    countList = countList.next;
  }

  // counting the mid of the linked list
  let mid = Math.floor(count / 2);
  let count2 = 0;

  // separating the left and right part with
  // respect to mid node in tke linked list
  while (count2 < mid) {
    count2++;
    leftPointer = leftPointer.next;
  }

  rightPart = new LinkedList(leftPointer.next);
  leftPointer.next = null;

  // Here are two linked list which
  // contains the left most nodes and right
  // most nodes of the mid node
  return this._mergeSort(
    this.mergeSort(leftPart),
    this.mergeSort(rightPart.head)
  );
};

// Merging both lists in sorted manner
LinkedList.prototype._mergeSort = function (left, right) {
  // Create a new empty linked list
  let result = new LinkedList();

  let resultPointer = result.head;
  let pointerLeft = left;
  let pointerRight = right;

  // If true then add left most node value in result,
  // increment left pointer else do the same in
  // right linked list.
  // This loop will be executed until pointer's of
  // a left node or right node reached null
  while (pointerLeft && pointerRight) {
    let tempNode = null;

    // Check if the right node's value is greater than
    // left node's value
    if (pointerLeft.node > pointerRight.node) {
      tempNode = pointerRight.node;
      pointerRight = pointerRight.next;
    } else {
      tempNode = pointerLeft.node;
      pointerLeft = pointerLeft.next;
    }

    if (result.head == null) {
      result.head = new Node(tempNode);
      resultPointer = result.head;
    } else {
      resultPointer.next = new Node(tempNode);
      resultPointer = resultPointer.next;
    }
  }

  // Add the remaining elements in the last of resultant
  // linked list
  resultPointer.next = pointerLeft;
  while (resultPointer.next) resultPointer = resultPointer.next;

  resultPointer.next = pointerRight;

  // Result is  the new sorted linked list
  return result.head;
};

// Initialize the object
let l = new LinkedList();
l.insert(10);
l.insert(20);
l.insert(3);
l.insert(2);
l.insert(1);
// Print the linked list
l.iterate();

// Sort the linked list
l.head = LinkedList.prototype.mergeSort(l.head);

document.write("<br> After sorting : ");

// Print the sorted linked list
l.iterate();
