let ham = document.querySelector(".ham");
let navMenu = document.querySelector(".nav-menu");

ham.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
    if (ham.getAttribute("name") === "menu-outline"){
        ham.setAttribute("name", "close-outline")
    }
    else{
        ham.setAttribute("name", "menu-outline")
    }
})
