function signupHandiling(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    let obj={
        "pass" :pass,
        "name" : name

    }
    localStorage.setItem(email,JSON.stringify(obj));
}

function loginHandiling(){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    let obj=JSON.parse(localStorage.getItem(email));
    obj["yp"]="bro";
    console.log(obj);
    if(pass===obj['pass']){
        alert("access granted");
    }
    else{
        alert("access denide");
    }
}