var myAllbutton = document.querySelectorAll(".allBtu");
var myDelbutton=document.querySelector(".del")
var display = document.querySelector(".display");
var myEqual = document.querySelector(".Equal");
var myAc =document.querySelector(".AC");
var myOn =document.querySelector(".on");

  myAllbutton.forEach((myAllbutton)=>{
    myAllbutton.addEventListener("click",()=>{         
      display.value+=myAllbutton.innerHTML;
      })
  })

 myDelbutton.addEventListener("click",()=>{
        display.value="";
  })

 myEqual.addEventListener("click",()=>{
   display.value = eval(display.value);
    if(display.value=="undefined"){
       display.value="";
    }
  })

 myAc.addEventListener("click",()=>{
    display.value=display.value.slice(0,-1);
  })

 myOn.addEventListener("click",()=>{
   display.value="Hello";
 })
