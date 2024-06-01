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
        window.scrollTo(0, tmp-40);
    }
  }