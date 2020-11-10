// const text = document.querySelector("#text")
// const submit = document.querySelector("#sub")
// const list = document.querySelector("#list")

// submit.addEventListener("click",run)
// function run(e){
//     if(text.value == ""){
//         text.style.border = "2px solid red"
       
        
//     }
//    else{
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(text.value));
//     list.appendChild(li);
//     text.value = "";
//     text.style.border = "1px solid black"
   

//    }
// }

let authorized = true;

// localStorage.setItem("auth", authorized);



// localStorage.removeItem("auth")

// localStorage.clear();

let authState = localStorage.getItem("auth");
authState = JSON.parse(authState);
if(authState === true){
    console.log('User is logged in');
}
else{
    console.log('User not logged in');
}

// setTimeout(() => {
//     window.location.href = "/form.html"
// }, 5000)


























