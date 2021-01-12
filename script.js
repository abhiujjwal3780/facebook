function signupHandiling(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    localStorage.setItem(email,pass);
}

function loginHandiling(){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;

    if(pass===localStorage.getItem(email)){
        alert("access granted");
    }
    else{
        alert("access denide");
    }
}