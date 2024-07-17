// !setting data to local storage
const data = "abcd";
localStorage.setItem("name",JSON.stringify(data));

// getting
console.log(localStorage.getItem("name"));

// removing
localStorage.removeItem("name");



// !setting data in session storage

sessionStorage.setItem("sname",new Date());

console.log(sessionStorage.getItem("sname"));
