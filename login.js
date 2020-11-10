named= document.querySelector("#text");
email = document.querySelector("#email");
password = document.querySelector("#pass");
cnfpassword = document.querySelector("#cnf");
lang = document.querySelector("#lang")
addskill=  document.querySelector("#sub");
skill = document.querySelector("#hello");
register = document.querySelector("#register");
userdata = {};
errors = {};



register.addEventListener("click",run);
function run(e){
    if(named.value.length > 5){
        userdata.name = named.value;
    }
    else{
        errors.name = "name too short";
    }
    if(email.value.length >0){
        userdata.email = email.value;
    }
    else{
        errors.email = "invalid email";
    }

    if(password.value.length < 8 ){
        errors.password = "password too short";
    }
    else{
        userdata.password = password.value
    }

    if(password.value.length === cnfpassword.value.length){
        userdata.cnfpassword = cnfpassword.value
    }

    else{
        errors.cnfpassword = "recheck password"
    }
    if(!userdata.skills){
        errors.skills = "no skill added";
    }
    if(Object.keys(errors).length>0){
        alert("there were some problem check console");
        console.log(errors)
        errors = {}
    }
    else{
        console.log(userdata);
        let autharized = true;
        localStorage.setItem("auth",autharized)
        localStorage.setItem("userdata",JSON.stringify(userdata))
        window.location.href = "/loggedin.html"
    }



    // ud  = JSON.stringify(userdata)
    
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




