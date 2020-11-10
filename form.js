// const NAME = document.querySelector("#text");
// const email = document.querySelector("#email");
// const password = document.querySelector("#pass");
// const cnfpassword = document.querySelector("#cnf");
// const lang = document.querySelector("#lang");
// const addSkill = document.querySelector("#sub");
// const skill = document.querySelector("#hello")
// const register = document.querySelector("#register")
// let userData = {};
// let errors = {};

// register.addEventListener("click",name);
// function name(e){
//     if (NAME.value.length >5){
//         // console.log(NAME.value);
//         userData.name = NAME.value;
//     }
//     else{
//         // alert("name is too short")
//         errors.name = "Name too short"
//     }
//     if(email.value.length > 0){
//         userData.email = email.value;
//     }
//     else{
//         errors.email = "Invalid email"
//     }

//     if(password.value.length <8){
//         // alert("password too short")
//         errors.password = "Password short"
//     }
//     else{
//         // console.log(password.value);
//         userData.password = password.value;
//     }
//     if(password.value === cnfpassword.value){
//         // console.log(cnfpassword.value);
//         userData.cnfpassword = cnfpassword.value
//     }
//     else{
//         // alert("recheck password")
//         errors.cnfpassword = "Recheck password"
//     }
//     if(!userData.skills){
//         errors.skills = "No skills added"
//     }
//     if(Object.keys(errors).length > 0){
//         alert("There were some problems check console")
//         console.log(errors);
//         errors = {};
//     }
//     else{
//         console.log(userData);
//     }

// }




// addSkill.addEventListener("click",add);
// function add(e){
//    const value = lang.value;
//    if(value.length > 0){
//        skill.textContent = skill.textContent + ' ' + value;
//        lang.value = "";
//        if(userData.skills){
//            userData.skills.push(value)
//        }
//        else{
//            userData.skills = [];
//            userData.skills.push(value)
//        }
//        console.log(userData);
//    }
// }