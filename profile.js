var email = localStorage.getItem("useremail");
let signup=JSON.parse(localStorage.getItem(email));
console.log(signup.name);
// setTimeout(() => {
//     let variabletest=document.getElementById("name");

// variabletest.value = signup.name;
// }, 1000);
let variabletest=document.getElementById("name");

variabletest.value = signup.name;
document.getElementById("inputEmail4").value=email;
function submitupdate(){
     let name1=document.getElementById("name").value;
     let emailid=document.getElementById("inputEmail4").value;
     let birthday1=document.getElementById("birthday").value;
     let Hobbies1=document.getElementById("Hobbies").value;
    // console.log(Hobbies1);
     let websites1=document.getElementById("websites").value;
     let cover1=document.getElementById("cover").value;
     let profilepic1=document.getElementById("profilepic").value;
     let inputaddress1=document.getElementById("inputAddress").value;
     let inputcity1=document.getElementById("inputCity").value;
     let inputState1=document.getElementById("inputState").value;
    let user={};
    user.name=name1;
    user.email=emailid;
    user.birthday=birthday1;
    user.Hobbies=Hobbies1;
    user.websites=websites1;
    user.cover=cover1;
    user.profilepic=profilepic1;
    user.inputaddress=inputaddress1;
    user.inputcity=inputcity1;
    user.inputState=inputState1;
    localStorage.setItem("useremail",JSON.stringify(user));
    alert("data submited successfyly");
    
}