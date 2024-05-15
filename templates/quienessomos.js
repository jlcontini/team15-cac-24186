let sliderInner = document.querySelector(".slider");

let images = sliderInner.querySelectorAll("img")

let index=1;

setInterval(function(){
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    if(index > index.length){
        index = 0;
    }
    index++;
}, 1000);