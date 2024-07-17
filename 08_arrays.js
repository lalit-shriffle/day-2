// creating a array

const arr = [1,2,3,4,5];
console.log(arr);

// array is an object 
console.log(typeof arr);
// creating a  array using new key word

const arr1 = new Array(1,2,3,4,5);


//accessing array element 
console.log(arr[0]);

//changing a array element
arr[0] = 22;
console.log(arr[0]);

// string to array
console.log(arr.toString());


// array propeties
console.log(arr.length);
console.log(arr.sort());

// looping the array
for(let item of arr){
    console.log(item);
}

// adding a element
arr.push(23);
console.log(arr);

// how to know the is this array
console.log(Array.isArray(arr));
console.log(arr instanceof Array);