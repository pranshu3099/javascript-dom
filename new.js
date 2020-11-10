// const form = document.querySelector("#form");
// form.addEventListener("keyup",runEvent);
// function runEvent(e){
//     // console.log(`Event type:${e.type}`);
//     console.log(e.target.value);
// }

// const btn = document.querySelector("#btn");
// btn.addEventListener("click",hello);
// function hello(e){
//    if(form.value === ""){
//        console.log("error")
//    }
//    else{
//        console.log(form.value);
//    }

// }


// const form = document.querySelector("#form");
// let newform = document.querySelector("#one")
// console.log(newform);
// form.addEventListener("keyup",runEvent);
// function runEvent(e){
//     // console.log(`Event type:${e.type}`);
//     // console.log(e.target.value);
//     newform.value = e.target.value;
    
// }


// const button = document.querySelector("#btn");
// const form = document.querySelector("#form")
// form.addEventListener("click",runEvent);
// function runEvent(e){
//    if(form.value.length >5 ){
//        alert("length must be less than 5")
//    }
//    else{
//        document.title = form.value;
//    }
// }




const div = document.querySelector("#header");
const minus = document.querySelector("#one");
const plus = document.querySelector("#two");
plus.addEventListener("click",run);
function run(e){
   div.textContent = Number(div.textContent) +1
}

minus.addEventListener("click",runto);
function runto(e){
    div.textContent = Number(div.textContent) -1
}