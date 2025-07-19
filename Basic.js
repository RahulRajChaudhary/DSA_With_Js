// LOOPS

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr1 = [2, -6, 4, 8, 1, -9];
let result1 = countNegativeNumbers(arr);
console.log("Result:", result); // Output: 2


function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr2 = [2, -6, 4, 8, 1, -9];
let result2 = findSmallest(arr);
console.log("Result:", result); // Output: -9



function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let arr3 = [2, -6, 4, 8, 1, -9];
let result3 = findLargest(arr);
console.log("Result:", result); // Output: 8



function secondLargest(arr) {
  if (arr.length < 2) return "Array should have at least two numbers";
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? "No second largest found" : second;
}
console.log(secondLargest([0, 3, 5, 2, 7, 9])); // 7


// Start Pattern


let n1 = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}

let n2 = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}




