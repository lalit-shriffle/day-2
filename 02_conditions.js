
// if else ladder
let age = 18;

if(age>=20){
    console.log("adult");
}else if(age<=19 && age>=13){
    console.log("teen");
}else{
    console.log("child");
}

// switch statements

switch(age){
    case 18:
        console.log("eighteen");
    break;
    case 19:
        console.log("ninteen");
    break;
    default :
        console.log("other than 18 and 19");
}