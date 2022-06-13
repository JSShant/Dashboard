const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu__btn");
const closeBtn = document.querySelector("#close__btn")

menuBtn.addEventListener("click", ()=> {
    sideMenu.style.display = "block"
})

closeBtn.addEventListener("click", ()=>{
    sideMenu.style.display = "none";
})