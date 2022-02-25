


let divCounter= document.querySelector(".counter")
let divButtons= document.querySelector(".buttons")

let number=document.createElement("p")
let button1= document.createElement("button")
let button2= document.createElement("button")
number.innerHTML=0;
button1.innerHTML="-";
button2.innerHTML="+";


divButtons.appendChild(number);
divButtons.appendChild(button1);
divButtons.appendChild(button2);
