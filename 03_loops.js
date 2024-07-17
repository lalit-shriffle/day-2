num = 10;
// while loop
while(num>=0){
    console.log("num " , num);
    if(num===8) break;
    num--;
}

for(let i=0; i<=10; i++){
    console.log("num : ",i);
}

const arr = [1,2,3,4,6,5,4];
for(const item of arr){
    if(item===4) continue;
    console.log("item : ",item);
}

const obj = {
    key1:"val1",
}

for(let key in obj){
    console.log("val of ",key , " is ", obj[key]);
}