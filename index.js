function showAlert (ev){
    // alert("clicked");
    document.location.href="https://www.google.com";
    // console.log(ev);
}

const h1 = document.querySelector("h1")
h1.addEventListener("click",showAlert);

const name1 = "name1=lalit patidar path="/""

document.cookie = `${name1}`;
document.cookie = `${"name2=aman"}`

document.cookie ="name1=; path="/""

let cookies = document.cookie;
console.log(cookies);


function Confirmation (){
    const val = confirm("Do you want to conutinue");
    if(val){
        console.log("yes");
    }else{
        console.log("no ");
    }
}

const Prompt =()=>{
    const val = prompt("enter your name - ");
    if(!val){
        Prompt();
    }else{
        console.log(val);

    }
}