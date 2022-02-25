


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


function decrease(){
  let result =parseInt(number.innerHTML);
  if(number.innerHTML==="0"){
    return;
  }
  result =result-1
  number.innerHTML=`${result}`
}

function increase(){
  let result =parseInt(number.innerHTML);
  result =result+1
  number.innerHTML=`${result}`
}

button1.addEventListener("click",decrease);
button2.addEventListener("click",increase);
