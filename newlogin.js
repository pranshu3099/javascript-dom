document.addEventListener("DOMContentLoaded",checkAuth);
function checkAuth(){
    if(localStorage.getItem("auth")){
        console.log("logged in successfully");
        const userdata = JSON.parse(localStorage.getItem("userdata"))
        showUsedata(userdata)
    }
    else{
        window.location.href = "/practice.html"
    }
}



function showUsedata(userdata){
    const showusename = document.querySelector("#name")
    const showuseemail = document.querySelector("#email")
    const skill = document.querySelector("#skill")

    const showname = "Your name is  " + userdata.name;
    showusename.textContent = showname
    const showemail = "Your email is "  + userdata.email;
    showuseemail.textContent = showemail
    let skillstring = "";
    userdata.skills.forEach(item => {
        skillstring = skillstring + " " + item
        const skillArray = "your skills are " + skillstring
        skill.textContent = skillArray
    });
}


const logout = document.querySelector("#back");
logout.addEventListener("click",back);
function back(e){
    window.location.href= "/practice.html"
    localStorage.clear()
}