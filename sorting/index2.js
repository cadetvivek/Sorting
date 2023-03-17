// insertion sort
// Task details

// Write a program to sort the array in ascending order using Insertion sort algorithm. After Sorting return the array.

// Note both the array and size is already given.

// Input:-

// [4,3,2,5,1]

// Output:-

// [1,2,3,4,5]

let arr = [4, 3, 2, 5, 1];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

return arr;
