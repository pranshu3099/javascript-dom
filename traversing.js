// let val;

// const list = document.querySelector("ul.collection");
// const listitem = document.querySelector("li.collection-item:first-child");

// val = list;
// val=listitem;

// get child nodes
// val= list.childNodes;
// val= list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;


// 1) Element
// 2) attribute(deprecated)
// 3) Textnode
// 8) Document itself
// 10) Doctype
// 9) Document itself

// --------get children elements nodes----------

// val = list.children;
// val = list.children[1];
// list.children[1].textContent="hello";

// // ------------children pf children--------------

// val = list.children[3].children[0];

// // -------first child-----------
// // val = list.firstChild;
// // val = list.firstElementChild;
// // ------------last child---------
// // val = list.lastChild;
// // val = list.lastElementChild;

// //  count child elements
// // val = list.childElementCount;

// // get parent node

// // val = listitem.parentElement;
// // val = listitem.parentNode;
// // val= listitem.parentElement.parentElement;

// // get next element

// // val = listitem.nextSibling;
// // val = listitem.nextElementSibling;
// // val = listitem.nextElementSibling.nextElementSibling;
// // val = listitem.nextElementSibling.nextElementSibling.previousElementSibling;


// // get previous element

// // val = listitem.previousSibling;
// // val = listitem.previousElementSibling;



// // console.log(val);




// // -------------------Create Element---------------------

// const li = document.createElement("li");
// // Add class Name
// li.className="collection-item";
// li.id = "new-item";

// // Add attribute
// li.setAttribute("title","New Item");
// // create text node and append
// li.appendChild(document.createTextNode("Hello World"));
// // Append li as child to ul
// document.querySelector("ul.collection").appendChild(li);
// // Create new link element
// const link = document.createElement("a");
// // add a class
// link.className = "delete-item,secondary-content";
// // Add icon html
// link.innerHTML= '<i class="fa fa-remove"></i>';
// // Append link to li
// li.appendChild(link);
// console.log(li);




// // ---------------Removing and replacing elements------------------

// // REPLACE ELEMENTS

// // create element

// const newheading = document.createElement("h2");

// // Add id

// newheading.id = "task-title";

// // New text node

// newheading.appendChild(document.createTextNode("Task list"));

// // Get old heading

// const oldheading = document.getElementById("task-title");
// // parent

// const cardaction = document.querySelector(".card-action");
// // replace

// cardaction.replaceChild(newheading,oldheading);

// console.log(newheading);


// Remoove Elements

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list items

lis[0].remove();

// Remove child element

list.removeChild(lis[3]);


// Classes and li

const firstli = document.querySelector("li:first-child");
const link = firstli.children[0];
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
// Add a class using classlist
link.classList.add("test");
link.classList.remove("test");
val = link;


// set attributes
val = link.getAttribute("href");
val = link.setAttribute("href","https://www.google.com");
val = link.hasAttribute("href");
link.setAttribute("title","google");
val =link.hasAttribute("title");
val = link;
 link.removeAttribute("title");
console.log(val);