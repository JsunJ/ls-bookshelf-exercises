let array1 = [1, 2, undefined, 4]; // length of 4

let array2 = [1];
array2.length = 5; // length of 5

let array3 = [];
array3[-1] = [1]; // length of 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // length of 3

let array5 = [];
array5[100] = 3; // length of 101