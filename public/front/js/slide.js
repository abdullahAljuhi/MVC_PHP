let left = document.querySelector(".before");
let right = document.querySelector(".after");
let pointes=document.querySelectorAll(".slider-point span");
let imgs=[
    "./front/images/slide/slid1.jpg",
    "./front/images/slide/slid2.jpg",
    "front/images/slide/slid3.jpg",
    "front/images/slide/slid4.jpg",
    "front/images/slide/slid5.jpg",
];
let slidertopimg=document.querySelector(".slider-top img");
let x=0;
slidertopimg.src = imgs[x];
setInterval(()=>{
    slidertopimg.src = imgs[x];
    if(x >= imgs.length-1){
        x = 0;
        pointes[imgs.length-1].classList.remove("active")
        pointes[x].classList.add("active");
    }else {
        x++;
        pointes[x-1].classList.remove("active")
        pointes[x].classList.add("active");
    }
},10000)

left.addEventListener("click",()=>{
    remveActive(pointes);
    if(x >= imgs.length-1){
        x = imgs.length-1;
        slidertopimg.src = imgs[x];
        pointes[x].classList.add("active");
    }else {
        x++;
        slidertopimg.src = imgs[x];
        pointes[x].classList.add("active");
    }
})
right.addEventListener("click",()=>{
    remveActive(pointes);
    if(x < 0){
        x = 0;
        slidertopimg.src = imgs[x];
        pointes[x].classList.add("active");
    }else {
        slidertopimg.src = imgs[x];
        pointes[x].classList.add("active");
        x--;
        if(x<0){
            x = 0;
        }
    }
})
function remveActive(arry){
    arry.forEach(element => {
        if(element.classList.contains("active")){
            element.classList.remove("active")
        }
    });
}
pointes.forEach(element => {
    element.addEventListener("click",(e)=>{
        remveActive(pointes);
        e.target.classList.add("active");
    });
});
