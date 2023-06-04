let firstName=prompt("Adiniz nedir ?")
let myName = document.querySelector("#myName")

if(firstName){
myName.innerHTML=`${firstName}`
}else{
    myName.innerHTML=`No Name`    
}

function showTime(){
    
    const tarih=new Date;

    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    
    
    let gun =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let gunName = gun[tarih.getDay()]
    
    let clock=document.querySelector("#myClock");
    clock.innerHTML = `${saat}:${dakika}:${saniye} ${gunName}`;
}

setInterval(zaman,1000);
