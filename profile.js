document.getElementById("name").value = signupdata.name;
document.getElementById("inputEmail4").value=signup.email;
function submit(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("inputEmail4").value;
    const birthday=document.getElementById("birthday").value;
    const Hobbies=document.getElementById("Hobbies").value;
    const websites=document.getElementById("websites").value;
    const cover=document.getElementById("cover").value;
    const profilepic=document.getElementById("profilepic").value;
    const inputaddress=document.getElementById("inputAddress").value;
    const inputcity=document.getElementById("inputCity").value;
    const inputState=document.getElementById("inputState").value;
    signupdata.name=name;
    signupdata.email=email;
    signupdata.birthday=birthday;
    signup.Hobbies=Hobbies;
    signupdata.websites=websites;
    signup.cover=cover;
    signupdata.profilepic=profilepic;
    signupdata.inputaddress=inputaddress;
    signupdata.inputcity=inputcity;
    signup.inputState=inputState;
}