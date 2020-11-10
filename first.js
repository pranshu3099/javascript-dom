const div = document.querySelector("#header")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const block = document.querySelector("#block")
const none = document.querySelector("#none")

red.addEventListener("click",color);
function color(e){
    div.style.background = "red";
    
}

green.addEventListener("click",col1);
function col1(e){
    div.style.background = "Green"
}

none.addEventListener("click",abc);
function abc(e){
    div.style.display = 'none'
}

block.addEventListener("click", hello)
function hello(e){
    div.style.display = "block"
}