const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let item1=document.querySelector("#item1")
let item2=document.querySelector("#item2")
let item3=document.querySelector("#item3")
let item4=document.querySelector("#item4")

item1.addEventListener("click",myFunction1)
item2.addEventListener("click",myFunction2)
item3.addEventListener("click",myFunction3)
item4.addEventListener("click",myFunction4)

let menu1=document.querySelector("#one")
let menu2=document.querySelector("#two")
let menu3=document.querySelector("#three")
let menu4=document.querySelector("#four")
let menu5=document.querySelector("#five")
let menu6=document.querySelector("#six")
let menu7=document.querySelector("#seven")
let menu8=document.querySelector("#eight")
let menu9=document.querySelector("#nine")


function myFunction1(e){
  e.target.classList.toggle("btn-item-mouseon")
  item2.classList.remove("btn-item-mouseon")
  item3.classList.remove("btn-item-mouseon")
  item4.classList.remove("btn-item-mouseon")
  menu1.innerHTML = `  <div class="col-4 mb-4">
  <img src="images/1.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
  <h4 class="d-flex justify-content-between border-bottom border-black">${menu[0].title}<span>${menu[0].price}$</span></h4>  
  <p>${menu[0].desc}</p>           
</div>`
  menu2.innerHTML = `   <div class="col-4 mb-4">
  <img src="images/2.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[1].title}<span>${menu[1].price}$</span></h4>  
<p>${menu[1].desc}</p>         
</div>`
  menu3.innerHTML = `    <div class="col-4 mb-4">
  <img src="images/3.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[2].title}<span>${menu[2].price}$</span></h4>  
<p>${menu[2].desc}</p>           
</div> `
  menu4.innerHTML = `  <div class="col-4 mb-4">
  <img src="images/4.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[3].title}<span>${menu[3].price}$</span></h4>  
<p>${menu[3].desc}</p>           
</div> `
  menu5.innerHTML = ` <div class="col-4 mb-4">
  <img src="images/5.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[4].title}<span>${menu[4].price}$</span></h4>  
<p>${menu[4].desc}</p>            
</div> `
  menu6.innerHTML = ` <div class="col-4 mb-4 ">
  <img src="images/6.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[5].title}<span>${menu[5].price}$</span></h4>  
<p>${menu[5].desc}</p>            
</div>`
  menu7.innerHTML = `     <div class="col-4 mb-4  ">
  <img src="images/7.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[6].title}<span>${menu[6].price}$</span></h4>  
<p>${menu[6].desc}</p>            
</div>`
  menu8.innerHTML = `    <div class="col-4  mb-4 ">
  <img src="images/8.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[7].title}<span>${menu[7].price}$</span></h4>  
<p>${menu[7].desc}</p>             
</div>`
  menu9.innerHTML = `<div class="col-4 mb-4 ">
  <img src="images/9.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
  < <h4 class="d-flex justify-content-between border-bottom border-black">${menu[8].title}<span>${menu[8].price}$</span></h4>  
  <p>${menu[8].desc}</p>             
</div>`

}

function myFunction2(e){
  e.target.classList.toggle("btn-item-mouseon")
  item1.classList.remove("btn-item-mouseon")
  item3.classList.remove("btn-item-mouseon")
  item4.classList.remove("btn-item-mouseon")
  menu1.innerHTML = `  <div class="col-4 mb-4">
  <img src="images/1.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
  <h4 class="d-flex justify-content-between border-bottom border-black">${menu[0].title}<span>${menu[0].price}$</span></h4>  
  <p>${menu[0].desc}</p>           
</div>`
  menu2.innerHTML = ``
  menu3.innerHTML = `    <div class="col-4 mb-4">
  <img src="images/3.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[2].title}<span>${menu[2].price}$</span></h4>  
<p>${menu[2].desc}</p>           
</div> `
  menu4.innerHTML = `  `
  menu5.innerHTML = ` `
  menu6.innerHTML = ` `
  menu7.innerHTML =  `     <div class="col-4 mb-4  ">
  <img src="images/7.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[6].title}<span>${menu[6].price}$</span></h4>  
<p>${menu[6].desc}</p>            
</div>`
  menu8.innerHTML = ``
  menu9.innerHTML = ``
}

function myFunction3(e){
  e.target.classList.toggle("btn-item-mouseon")
  item1.classList.remove("btn-item-mouseon")
  item2.classList.remove("btn-item-mouseon")
  item4.classList.remove("btn-item-mouseon")
  menu1.innerHTML = ` `
  menu2.innerHTML =`   <div class="col-4 mb-4">
  <img src="images/2.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[1].title}<span>${menu[1].price}$</span></h4>  
<p>${menu[1].desc}</p>         
</div>`
  menu3.innerHTML = ` `
  menu4.innerHTML = ` `
  menu5.innerHTML = `<div class="col-4 mb-4 ">
  <img src="images/9.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
  < <h4 class="d-flex justify-content-between border-bottom border-black">${menu[8].title}<span>${menu[8].price}$</span></h4>  
  <p>${menu[8].desc}</p>             
</div>`
  menu6.innerHTML = ` <div class="col-4 mb-4 ">
  <img src="images/6.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[5].title}<span>${menu[5].price}$</span></h4>  
<p>${menu[5].desc}</p>            
</div>`
  menu7.innerHTML = ``
  menu8.innerHTML = ``
  menu9.innerHTML =``
}
function myFunction4(e){
  e.target.classList.toggle("btn-item-mouseon")
  item1.classList.remove("btn-item-mouseon")
  item2.classList.remove("btn-item-mouseon")
  item3.classList.remove("btn-item-mouseon")
  menu1.innerHTML = ` `
  menu2.innerHTML = ``
  menu3.innerHTML = ` `
  menu4.innerHTML =`  <div class="col-4 mb-4">
  <img src="images/4.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[3].title}<span>${menu[3].price}$</span></h4>  
<p>${menu[3].desc}</p>           
</div> `
  menu5.innerHTML =  ` <div class="col-4 mb-4">
  <img src="images/5.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4 mb-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[4].title}<span>${menu[4].price}$</span></h4>  
<p>${menu[4].desc}</p>            
</div> `
  menu6.innerHTML = ``
  menu7.innerHTML = ``
  menu8.innerHTML = `    <div class="col-4  mb-4 ">
  <img src="images/8.jpg"  class="border border-black rounded-4 border-4" alt="" height="180" width="180">
</div>
<div class="col-8 ps-4">
<h4 class="d-flex justify-content-between border-bottom border-black">${menu[7].title}<span>${menu[7].price}$</span></h4>  
<p>${menu[7].desc}</p>             
</div>`
  menu9.innerHTML = ``
}


