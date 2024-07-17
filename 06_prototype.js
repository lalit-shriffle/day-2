function Person (name){
    this.name=name
    
}

const obj1 = new Person("lalit");

Person.prototype.printName = function (){
    console.log("name is ",this.name);
}

obj1.printName();

