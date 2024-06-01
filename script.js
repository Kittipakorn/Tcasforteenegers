let popup = document.getElementById("pop-up");
let bg = document.getElementById("bg");
let body = document.getElementById("top-page");

function closefn(){
    popup.style.display = "none";
    bg.style.display = "none";
    body.style.overflow = "auto";
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleHam(x) {
    x.classList.toggle("change");
    var myMenu = document.getElementById("myMenu");
    if (myMenu.className === "menu") {
        myMenu.className += " menu-active";
    }
    else {
        myMenu.className = "menu";
        var tmp = window.scrollY;
        window.scrollTo(0, tmp-80);
    }
  }

const carousel = document.querySelector(".carousel");
const FirstCardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false,startX,startScrollLeft;

document.addEventListener("DOMContentLoaded", () => {
    const arrowBtns = document.querySelectorAll(".wrapper i");

    if (arrowBtns && arrowBtns.length > 0) {
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -FirstCardWidth : FirstCardWidth;
            });
        });
    } else {
        console.error('No arrow buttons found or arrowBtns is undefined');
    }
});


const draggStart = (e) => {
    isDragging = true;  
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const draggStop = () => {
    isDragging = false;  
    carousel.classList.remove("dragging");
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft  - (e.pageX-startX);
}

carousel.addEventListener("mousedown",draggStart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",draggStop);

let isDragging2 = isDragging;
const carousel2 = document.querySelector(".carousel2");
const FirstCardWidth2 = carousel2.querySelector(".card").offsetWidth;

document.addEventListener("DOMContentLoaded", () => {
    const arrowBtns = document.querySelectorAll(".wrapper2 i");

    if (arrowBtns && arrowBtns.length > 0) {
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel2.scrollLeft += btn.id === "left" ? -FirstCardWidth : FirstCardWidth;
            });
        });
    } else {
        console.error('No arrow buttons found or arrowBtns is undefined');
    }
});


const draggStart2 = (e) => {
    isDragging2 = true;  
    carousel2.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel2.scrollLeft;
}

const draggStop2 = () => {
    isDragging = false;  
    carousel2.classList.remove("dragging");
}

const dragging2 = (e) => {
    if(!isDragging) return;
    carousel2.scrollLeft = startScrollLeft  - (e.pageX-startX);
}

carousel2.addEventListener("mousedown",draggStart2);
carousel2.addEventListener("mousemove",dragging2);
document.addEventListener("mouseup",draggStop2);