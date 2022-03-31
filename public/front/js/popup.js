let popContent = document.querySelector(".popaup");
let popCo = document.querySelector(".popaup >div");
let Naccaont = document.querySelector(".new-accaont");
let cartShop=document.querySelector(".update-cart-shopping");
let w = document.body.offsetHeight;
if(popContent){
    popContent.style.display="none";
    popContent.style.height= w +"px";
}

let popsign=document.querySelector(".popes-container .sign-up-popup");
let checkpopes=document.querySelector(".section-popses");
let cartCard=document.querySelector(".cart-card-info");
let poplgin=document.querySelector(".popes-container .login-pop");
let close=document.querySelector(".popaup span")
let popdis=document.querySelector(".popes-container");
let login=document.querySelector("#login-pop");
let poput=document.querySelector(".popchout");
let popMain=document.querySelector(".pop-main");


if(login){
    if(poput){
        poput.style.display="none"
    }
    login.addEventListener("click",(e)=>{
        e.preventDefault();
        popContent.style.display="block";
       popCo.appendChild( popsign );
       popContent.style.height= w +"px";
    });
}
if(Naccaont){
    Naccaont.addEventListener("click",(e)=>{
        e.preventDefault();
        popCo.innerHTML=" ";
        popCo.appendChild( poplgin );
        popContent.style.display="block";
    });
}
if(popCo){
    popCo.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target==popCo){
            popCo.innerHTML="";
            popContent.style.display="none";
            console.log(close);
        }
    
    });
}
if(close){

    close.addEventListener("click",()=>{
        popCo.innerHTML="";
        popContent.style.display="none";
        console.log(close);
    });
}
if(cartShop){
    if(popMain){
        popMain.style.display="none"
    }
    cartShop.addEventListener("click",(e)=>{
        e.preventDefault();
        popContent.style.display="block";
       popCo.appendChild( checkpopes );
       popContent.style.height= w +"px";
    });
}
