let navMenu=document.querySelector(".navMenu");
let openMenuButton=document.querySelector(".open-button");
let closeMenuButton=document.querySelector(".close-button");

// navbar responsiveness
openMenuButton.addEventListener("click",()=>{
    navMenu.classList.toggle("open");
    navMenu.classList.toggle("nav-mobile");
    closeMenuButton.classList.toggle("open");
    openMenuButton.classList.toggle("close");
});

closeMenuButton.addEventListener("click",()=>{
    navMenu.classList.toggle("open");
    navMenu.classList.toggle("nav-mobile");
    closeMenuButton.classList.toggle("open");
    openMenuButton.classList.toggle("close");
});
document.addEventListener("click",(e)=>{

    if(window.innerWidth<1000){
    if (!openMenuButton.contains(e.target)) {
        if(openMenuButton.classList.contains("close")){
        navMenu.classList.remove("open");
        navMenu.classList.toggle("nav-mobile");
        closeMenuButton.classList.toggle("open");
        openMenuButton.classList.toggle("close");
       
       }
  }}
});


