let sliderInner = document.querySelector(".slider-inner");

let images = sliderInner.querySelectorAll("img")

let index = 1;

setInterval(function(){
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    if(index > index.length){
        index++;
    }

}, 1000);