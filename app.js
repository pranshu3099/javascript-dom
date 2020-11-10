// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);




//--------------------- Document.get element by id------------------------





// console.log(document.getElementById("task-title"));

// get things form the element

// console.log(document.getElementById("task-title").id);

// change styles

// document.getElementById("task-title").style.background = "#333";
// document.getElementById("task-title").style.color = "#fff";
// document.getElementById("task-title").style.padding = "5px";
// document.getElementById("task-title").style.display = "none";

// change content

// document.getElementById("task-title").textContent="Task List";
// document.getElementById("task-title").innerText="My Task";
// document.getElementById("task-title").innerHTML="<span style='color:red'>Task list</span>";


// const tasktitle = document.getElementById("task-title");

// tasktitle.style.background = "#333";
// tasktitle.style.color = "#fff";
// tasktitle.style.padding = "5px";


// tasktitle.textContent="Task List";
// tasktitle.innerText="My Task";
// tasktitle.innerHTML="<span style='color:red'>Task list</span>";





//------------ document.queryselector()------------------




// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector('li').style.color = "red";
// document.querySelector('ul li').style.color = "blue";
// document.querySelector('li:last-child').style.color = "red";
// document.querySelector('li:nth-child(3)').style.color = "orange";
// document.querySelector('li:nth-child(4)').textContent = "Pranshu";
// document.querySelector('li:nth-child(odd)').style.background = "gray";
// document.querySelector('li:nth-child(even)').style.background = "cyan";





//-----------------------Document.getelements by class name-----------------------------------




// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document.querySelector('ul').getElementsByClassName("collection-item");

// console.log(listItems);




// -----------------Document.getelements by Tag name-----------------

// let lis = document.getElementsByClassName("collection-item");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// -----------convert html collection in to array------------------

// lis = Array.from(lis);

// lis.reverse();
// lis.forEach(function(li){
//     console.log(li);
//     li.textContent="hello";
// });
// console.log(lis);


// -------------------------------------document.queryselectorAll------------------------

// const items = document.querySelectorAll("ul.collection li.collection-item");

// items.forEach(function(item,index){
//     item.textContent=`${index}: Hello`;
// })
// console.log(items);

// const liodd = document.querySelectorAll("li:nth-child(odd)");
// const lieven = document.querySelectorAll("li:nth-child(even)");

// liodd.forEach(function(li,index){
//     li.style.background = '#ccc';
// })

// for(let i=0;i<lieven.length;i++){
//         lieven[i].style.background = "#f4f4f4";
// }