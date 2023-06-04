let firstName=prompt("Adiniz nedir ?")
let myName = document.querySelector("#myName")

if(firstName){
myName.innerHTML=`${firstName}`
}else{
    myName.innerHTML=`No Name`    
}