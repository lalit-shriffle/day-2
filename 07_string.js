let name1 = "lalit 'hey'";
let name2 = "lalit 'hey'";

console.log(name1===name2);

// using single quote in double quote
console.log("\'hello\'");
console.log(typeof name1);  // string

// creating string as object
const str1 = new String("hello");
let y = new String("hello");

console.log(typeof str1); // string





// string methods 

// length of string
console.log(name1.length);

// find the char by index
console.log(name1.charAt(1));


// access of property 
console.log(name1[0]);


// extracting sub part

console.log(name1.slice(0,4));


// substr method
console.log(name1.substr(1,4));

// convert to uppercase
console.log(name1.toUpperCase());

// convert to lowercase
console.log(name1.toLowerCase());

// concat two string
console.log(name1.concat(name2));


// trim the string
const str = "   hey whoa  ";
console.log(str);
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());


// repeat method
console.log(name1.repeat(3));

// replacing string 9only first match)
console.log(name1.replace("l","L"));

// replace all match 
console.log(name1.replace(/l/g,"L"));

// convert string to array
console.log(name1.split(""));