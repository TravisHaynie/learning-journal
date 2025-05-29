const menuBtn = document.getElementById("menu-drop");
const hamburgerMenu = document.getElementById("nav-links");


menuBtn.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('show');
    hamburgerMenu.classList.toggle('hidden');
})