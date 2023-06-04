//Javascript file

const inputBOX = document.querySelector(".form-control")
const listDOM = document.querySelector(".listgroup")
let alert = document.querySelector(".alert")

let option ={
    animation : true,
    delay : 2000
};


function addTask(){
    if(!inputBOX.value){ 
            let toastHTMLElement =document.getElementById("EpicToast");
            let toastElement = new bootstrap.Toast(toastHTMLElement,option);
            toastElement.show();
    }else{
        let list =document.createElement("p")
        list.innerHTML=inputBOX.value
        listDOM.append(list)
        let span = document.createElement("span")
        span.innerHTML="X";
        list.append(span);
        inputBOX.value=""
        let toastHTMLElement =document.getElementById("EpicToast2");
        let toastElement = new bootstrap.Toast(toastHTMLElement,option);
        toastElement.show();
        
    }
    datasave()
    
}

listDOM.addEventListener("click",function(e){
    if(e.target.tagName === "P"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);



function datasave(){
    localStorage.setItem("data",listDOM.innerHTML);
}
function showTask(){
    listDOM.innerHTML=localStorage.getItem("data")
}
showTask()