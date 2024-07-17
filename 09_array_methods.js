const arr = [1,2,3,4,5,6];
// legnth of array
console.log(arr.length);

// element at index
console.log(arr[3]);

// array to string using join
console.log(arr.join("@"));

// pushing elements
arr.push(12)
console.log(arr);

arr.pop()
console.log(arr);

// adding element to first place
arr.unshift(44)
console.log(arr);

// removing element from first place
arr.shift();
console.log(arr);

//concating two array
const arr1 = [3,6,7,8];
console.log(arr.concat(arr1));

//mergin three array
const arr2 = [3,6,7,8];
console.log(arr.concat(arr1,arr2));
