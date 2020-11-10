document.addEventListener("DOMContentLoaded",checkAuth);
function checkAuth(){
    if(localStorage.getItem("auth")){
        console.log("loggedin successfully")
        const userdata = JSON.parse(localStorage.getItem("userdata"))
        showUsedata(userdata);
    }
    else{
        window.location.href = "/login.html"
    }
}


function showUsedata(userdata){
    console.log(userdata);
    const name = document.querySelector("#name")
const email = document.querySelector("#email")
// const lang = document.querySelector("#lang")
const skill = document.querySelector("#skill")
const showName  = "your name is " + userdata.name;
name.textContent = showName
const Youremail = "Your email is " + userdata.email;
email.textContent = Youremail
let skillstring = '';
userdata.skills.forEach(item =>{
    skillstring = skillstring + ' ' + item;
})
const skillArray = 'your skills are ' + skillstring
skill.textContent = skillArray

}