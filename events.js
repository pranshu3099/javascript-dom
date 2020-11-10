// document.querySelector(".clear-tasks").addEventListener("click",
// function(e){
//     console.log("hello world");
//     e.preventDefault();
// });


// document.querySelector(".clear-tasks").addEventListener("click",onclick);
// function onclick(e){
//     // console.log(("Clicked"));
//     let val;
//     val = e;
//     // Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
//     // e.target.innerText = "Hello";

//     // Event type
//     val = e.type;
//     // time stamp
//     val = e.timeStamp;
//     // cord event relative to the window
//     val = e.clientY;
//     val = e.clientX;
//      // cord event relative to the element
//      val = e.offsetY;
//      val = e.offsetX;
//     console.log(val);
// }




// ---------------Mouse Event------------------------

// const clearbtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// click

// clearbtn.addEventListener("click",runevent);

// Double click
// clearbtn.addEventListener("dblclick",runevent);
// Mousedown
// clearbtn.addEventListener("mousedown",runevent);

// Mouseup
// clearbtn.addEventListener("mouseup",runevent);

// Mouseenter
// card.addEventListener("mouseenter",runevent);
// Mouseleave
// card.addEventListener("mouseleave",runevent);
// Mouseover
// card.addEventListener("mouseover",runevent);
// Mouseout
// card.addEventListener("mouseout",runevent);

// Mousemove

// card.addEventListener("mousemove",runevent);

// event handler

// function runevent(e){
//     console.log(`Event type:${e.type}`);
//     heading.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;
//     document.body.style.backgroundColor  = `rgb(${e.offsetX},${e.offsetY},40)`;
// }



// ----------------------Keyboard and Input events--------------------------

const form = document.querySelector("form");

const taskinput= document.getElementById("task");
const heading  = document.querySelector("h5");

// Clear input

taskinput.value = " ";

// form.addEventListener("submit",runevent);
// keydown
// taskinput.addEventListener("keydown",runevent);

// keyup
// taskinput.addEventListener("keyup",runevent);
// keypress
// taskinput.addEventListener("keypress",runevent);
// focus
// taskinput.addEventListener("focus",runevent);
// blur
// taskinput.addEventListener("blur",runevent);
// cut
// taskinput.addEventListener("cut",runevent);
// paste
// taskinput.addEventListener("paste",runevent);
// input
taskinput.addEventListener("input",runevent);


function runevent(e){
    console.log(`Event type : ${e.type}`);
    // console.log(e.target.value);
    // heading.innerText = e.target.value;

    // Get input value

    // console.log(taskinput.value);
    // e.preventDefault();
}