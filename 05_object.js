// creating obj using literal
const obj1 = {name:"lalit"}

// ! preventing extension of object. 
// Object.preventExtensions(obj1)

//! checking object is extensible
console.log(Object.isExtensible(obj1));

// ! preventing adding and deleting from object
// Object.seal(obj1)

// ! checks is object sealed;
console.log("is sealed " ,Object.isSealed(obj1));

// !prevent any changes in object
Object.freeze(obj1);

// !checks if object is freeezed
console.log("isFrozen",Object.isFrozen(obj1));

obj1.lastname = "patidar";
obj1["city"] = "indore"

console.log(obj1);

const obj2 = {
    name:"aman",
    age:22
};
Object.assign(obj2,obj1);

console.log(obj2);

const obj3 = Object.create(obj2);
console.log(obj3.__proto__);

console.log("entries " , Object.entries(obj2));
console.log("keys " , Object.keys(obj2));
console.log("values " , Object.values(obj2));


Object.defineProperty(obj2,"data",{value:"ohk"});

Object.defineProperty(obj2,"fullName",{
    get:function(){
        console.log(this.name);
    },
    set:function newName(name){
        this.name = name;
    }   
})

console.log("obj2",obj2);
obj2.fullName
obj2.newName="aman";

console.log(obj2);