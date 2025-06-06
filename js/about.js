const menuBtn = document.getElementById("menu-drop");
const hamburgerMenu = document.getElementById("modal");
const closeMenu = document.getElementById("close-menu");


closeMenu.addEventListener("click", function() {
    if(window.innerWidth <= 850) {
        hamburgerMenu.style.display = "none";
        menuBtn.style.display = "block";
    }
   
})

menuBtn.addEventListener("click", function() {
    if(window.innerWidth <=850) {
        hamburgerMenu.style.display = "flex";
        menuBtn.style.display = "none";
    }
   
});