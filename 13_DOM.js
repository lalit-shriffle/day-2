const button = document.getElementById("click_btn")
button.innerHTML = "Click Button";
button.className = "newClass";
// button.disabled = true
button.style.backgroundColor = "red"

console.log(button.disabled);

if(button.disabled){
    button.style.color = "white"
}

document.write("hey")