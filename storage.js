// set local storage item
// localStorage.setItem("name","pranshu");
// localStorage.setItem("age","30");


// set session storage item

// sessionStorage.setItem("Gaurav","Singh");

// localStorage.removeItem("name");

// get from storage

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age")


// clear local storage

// localStorage.clear();
// console.log(name,age);


document.querySelector("form").addEventListener("submit",
function(e){
       const task =  document.getElementById("task").Value;
       localStorage.setItem("task",task);
       alert("task saved");
       e.preventDefault();
});