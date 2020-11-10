// // console.log("hello");

// let x=2
// let y = 3
//  let z = x+y
//  console.log(z);
//  function add(x,y){
//      let sum = x+y;
//      console.log(sum)
//  }

//  add(4,5);


const name = document.querySelector("#text");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const cnfpassword = document.querySelector("#cnf");
const lang = document.querySelector("#lang");
const skill = document.querySelector("#hello");
const addskill = document.querySelector("#sub");
const register = document.querySelector("#register");
const userdata = {};
let errors = {};

register.addEventListener("click",run);
function run(e){
    if(name.value.length>5){
        userdata.name = name.value
    }
    else{
        errors.name = "name too short"
    }
    if(email.value.length>0){
         userdata.email = email.value
    }
    else{
        errors.email = "inavalid email"
    }
    if(password.value.length<8){
        errors.password = "password too short"
    }
    else{
        userdata.password = password.value;
    }

    if(password.value === cnfpassword.value){
        userdata.cnfpassword = cnfpassword.value
    }
    else{
        errors.cnfpassword = "recheck password"
    }
    if(!userdata.skills){
        errors.skills = "no skills added"
    }
    if(Object.keys(errors).length>0){
        alert("there was some problem please check console");
        console.log(errors);
        errors = {}
    }
    else{
        console.log(userdata);
        let authorized = true;
        localStorage.setItem("auth",authorized);
        localStorage.setItem("userdata",JSON.stringify(userdata))
        window.location.href = "/loggedin.html"
    }
}


addskill.addEventListener("click",runevent);
function runevent(e){
    const value  = lang.value
    if(value.length>0){
        skill.textContent = skill.textContent + " " + value
        lang.value = ""
        if(userdata.skills){
            userdata.skills.push(value)
        }
        else{
            userdata.skills = []
            userdata.skills.push(value)
        }
    }
}