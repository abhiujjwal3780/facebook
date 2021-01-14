
// function appendtodo(task,tododiv){
//     let para=document.createElement("div");
//     para.innerHTML=`<span class="listitem">${task}</span><span id="${task}" onclick="removetodo(this.parentElement,this.id)"> &#10006 </span>`;
//     tododiv.appendChild(para);        
// }
// function removetodo(parent,idval){
// //alert(parent);
// parent.remove();
// let todoarr=window.localStorage.getItem("mytodo").split(',');
// let index=todoarr.indexOf(idval);
// todoarr.splice(index,1);
// window.localStorage.setItem("mytodo",todoarr);
// }
// function addtodo(){
// let todoarr=window.localStorage.getItem("mytodo").split(',');
// //alert(todoarr);
// let tododiv=document.getElementById("tododiv");
// let val=document.getElementById("todolist").value;
// todoarr.push(val);
// window.localStorage.setItem("mytodo",todoarr);
// document.getElementById("todolist").value='';
// alert("todo is added");
// appendtodo(val,tododiv);
// }
// let tododiv=document.getElementById("tododiv");
// let todoarr=window.localStorage.getItem("mytodo").split(',');

// let n=todoarr.length;
// if(n == 0){
//     let para=document.createElement("div");
//     para.innerHTML= "no list to do";
//     tododiv.appendChild(para);
//     //appendtodo("no item in list",tododiv);
// }else{
//     for(x of todoarr){
//         // let para=document.createElement("div");
//         // para.innerHTML= x;
//         // tododiv.appendChild(para);
//         appendtodo(x,tododiv);
        
//     }
// } 

