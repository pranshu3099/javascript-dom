const name = document.querySelector("#text");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const cnfpassword = document.querySelector("#cnf");
const lang = document.querySelector("#lang");
const addskill  = document.querySelector("#sub");
const skill = document.querySelector("#hello");
const register = document.querySelector("#register");

let userdata = {};
let errors = {};

register.addEventListener("click",names)
function names(e){
    if(name.value.length>5){
        userdata.name = name.value;
    }
    else{
        errors.name = "name too short"
    }
    if(email.value.length>0){
        userdata.email = email.value;
    }
    else{
        errors.email = "invalid email"
    }
    if(password.value.length<8){
        errors.password = "password too short";
    }
    else{
            userdata.password = password.value;
    }
    if(password.value === cnfpassword.value){
        userdata.cnfpassword =  cnfpassword.value
    }
    else{
        errors.cnfpassword = "Recheck password"
    }
    if(!userdata.skills){
        errors.skills = "No skills added"
    }
    if(Object.keys(errors).length>0){
             alert("there were some problems check console")
             console.log(errors);
             errors={}
    }
    else{
        console.log(userdata);
    }
}
 
addskill.addEventListener("click",add)
function add(e){
    const value = lang.value
    if (value.length>0){
        skill.textContent = skill.textContent + " " + value;
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
