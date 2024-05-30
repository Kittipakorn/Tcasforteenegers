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
        window.scrollY=0;
    }
  }